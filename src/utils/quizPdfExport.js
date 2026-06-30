import { toPng } from "html-to-image";
import { PDF_PAGE } from "../components/QuizPdfDocument.jsx";

const CAPTURE_PIXEL_RATIO = 2;

function captureOptions(element) {
  return {
    pixelRatio: CAPTURE_PIXEL_RATIO,
    cacheBust: true,
    backgroundColor: "#ffffff",
    skipFonts: false,
    width: PDF_PAGE.widthPx,
    height: element.offsetHeight,
  };
}

/**
 * KaTeX fonts must be embedded in the serialized SVG before export.
 * The first call primes font embedding; the second returns a correct PNG.
 */
async function capturePageToPng(element) {
  const options = captureOptions(element);
  await toPng(element, options);
  return toPng(element, options);
}

/**
 * Export paginated A4 pages — snapshot the same DOM nodes shown in preview.
 */
export async function exportQuizToPdf(pageElements, filename) {
  const pages = (pageElements ?? []).filter(Boolean);
  if (!pages.length) throw new Error("ไม่พบหน้า PDF สำหรับ export");

  const { jsPDF } = await import("jspdf");

  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidthMm = 210;
  const pageHeightMm = 297;

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const imgData = await capturePageToPng(page);
    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, 0, pageWidthMm, pageHeightMm, undefined, "FAST");
  }

  pdf.save(filename);
}
