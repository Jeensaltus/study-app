import { PDF_PAGE } from "../components/QuizPdfDocument.jsx";

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
    const el = pages[i];

    const canvas = await html2canvas(el, {
      scale: 2,
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

        node.querySelectorAll(".katex").forEach((el) => {
          el.style.lineHeight = "normal";
          if (!el.classList.contains("katex-display")) {
            el.style.display = "inline-block";
            el.style.verticalAlign = "-0.12em";
          }
        });
        node.querySelectorAll(".katex-display").forEach((el) => {
          el.style.margin = "0";
          el.style.textAlign = "left";
        });
        node.querySelectorAll(".pdf-solution .katex").forEach((el) => {
          el.style.color = "#0f172a";
        });
      },
    });

    if (!canvas.width || !canvas.height) {
      throw new Error(`ไม่สามารถจับภาพหน้า ${i + 1} ได้`);
    }

    const imgData = canvas.toDataURL("image/png");
    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, 0, pageWidthMm, pageHeightMm, undefined, "FAST");
  }

  pdf.save(filename);
}
