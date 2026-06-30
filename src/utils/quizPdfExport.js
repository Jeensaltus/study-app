import { PDF_PAGE } from "../components/QuizPdfDocument.jsx";

const CAPTURE_SCALE = 2;
const MATH_CAPTURE_SCALE = 3;

function getTopLevelKatexNodes(root) {
  return [...root.querySelectorAll(".katex")].filter((el) => {
    const parentKatex = el.parentElement?.closest(".katex");
    return !parentKatex || parentKatex === el;
  });
}

/**
 * html2canvas mis-renders KaTeX (sqrt, fractions) inside full pages.
 * Capture each expression in isolation, then swap to PNG so the page snapshot stays aligned.
 */
async function rasterizeKatexInClone(root, html2canvas) {
  const nodes = getTopLevelKatexNodes(root);

  for (const katexEl of nodes) {
    const width = Math.ceil(katexEl.getBoundingClientRect().width);
    const height = Math.ceil(katexEl.getBoundingClientRect().height);
    if (!width || !height) continue;

    const mathCanvas = await html2canvas(katexEl, {
      scale: MATH_CAPTURE_SCALE,
      backgroundColor: null,
      logging: false,
      width,
      height,
      scrollX: 0,
      scrollY: 0,
    });

    const img = root.ownerDocument.createElement("img");
    img.src = mathCanvas.toDataURL("image/png");
    img.style.width = `${width}px`;
    img.style.height = `${height}px`;
    img.style.maxWidth = "100%";
    img.style.verticalAlign = "middle";
    img.style.display = katexEl.classList.contains("katex-display") ? "block" : "inline-block";
    img.className = "pdf-katex-img";
    img.alt = "";
    katexEl.replaceWith(img);
  }
}

async function clonePageForCapture(sourceEl, html2canvas) {
  const clone = sourceEl.cloneNode(true);
  clone.style.position = "fixed";
  clone.style.left = "-100000px";
  clone.style.top = "0";
  clone.style.zIndex = "-1";
  clone.style.pointerEvents = "none";
  clone.style.width = `${PDF_PAGE.widthPx}px`;
  clone.style.minHeight = `${PDF_PAGE.heightPx}px`;
  document.body.appendChild(clone);

  // Layout + font metrics must settle before measuring KaTeX boxes.
  clone.getBoundingClientRect();
  await rasterizeKatexInClone(clone, html2canvas);

  return clone;
}

/**
 * Export paginated A4 pages — one canvas per page (no slicing through text).
 */
export async function exportQuizToPdf(pageElements, filename) {
  const pages = (pageElements ?? []).filter(Boolean);
  if (!pages.length) throw new Error("ไม่พบหน้า PDF สำหรับ export");

  const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidthMm = 210;
  const pageHeightMm = 297;

  for (let i = 0; i < pages.length; i++) {
    const captureRoot = await clonePageForCapture(pages[i], html2canvas);

    try {
      const canvas = await html2canvas(captureRoot, {
        scale: CAPTURE_SCALE,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false,
        width: PDF_PAGE.widthPx,
        height: PDF_PAGE.heightPx,
        windowWidth: PDF_PAGE.widthPx,
        windowHeight: PDF_PAGE.heightPx,
        scrollX: 0,
        scrollY: 0,
        onclone: (_doc, node) => {
          node.style.width = `${PDF_PAGE.widthPx}px`;
          node.style.minHeight = `${PDF_PAGE.heightPx}px`;
          node.style.background = "#ffffff";
          node.style.color = "#0f172a";
        },
      });

      if (!canvas.width || !canvas.height) {
        throw new Error(`ไม่สามารถจับภาพหน้า ${i + 1} ได้`);
      }

      const imgData = canvas.toDataURL("image/png");
      if (i > 0) pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, 0, pageWidthMm, pageHeightMm, undefined, "FAST");
    } finally {
      captureRoot.remove();
    }
  }

  pdf.save(filename);
}
