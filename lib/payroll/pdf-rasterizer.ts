const MAX_PAGES = 60;
const MAX_PDF_SIZE = 20 * 1024 * 1024;

export async function rasterizePdfForOcr(
  file: File,
  onProgress?: (page: number, total: number) => void,
): Promise<File[]> {
  if (file.size > MAX_PDF_SIZE)
    throw new Error(`${file.name} melebihi batas PDF besar 20 MB.`);
  const pdfjs = await import("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url,
  ).toString();
  const pdfDocument = await pdfjs.getDocument({
    data: new Uint8Array(await file.arrayBuffer()),
  }).promise;
  if (pdfDocument.numPages > MAX_PAGES)
    throw new Error(
      `${file.name} memiliki ${pdfDocument.numPages} halaman; batas IDA adalah ${MAX_PAGES} halaman.`,
    );
  const output: File[] = [];
  const base = file.name
    .replace(/\.pdf$/i, "")
    .replace(/[^a-z0-9_-]+/gi, "-")
    .slice(0, 60);

  for (
    let pageNumber = 1;
    pageNumber <= pdfDocument.numPages;
    pageNumber += 1
  ) {
    onProgress?.(pageNumber, pdfDocument.numPages);
    const page = await pdfDocument.getPage(pageNumber);
    const initial = page.getViewport({ scale: 1 });
    const scale = Math.min(1.8, 1400 / initial.width);
    const viewport = page.getViewport({ scale });
    const canvas = window.document.createElement("canvas");
    canvas.width = Math.ceil(viewport.width);
    canvas.height = Math.ceil(viewport.height);
    const context = canvas.getContext("2d", { alpha: false });
    if (!context)
      throw new Error(`Halaman ${pageNumber} tidak dapat dirender.`);
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvas, canvasContext: context, viewport }).promise;
    const blob = await new Promise<Blob>((resolve, reject) =>
      canvas.toBlob(
        (value) =>
          value
            ? resolve(value)
            : reject(new Error(`Halaman ${pageNumber} gagal dikonversi.`)),
        "image/jpeg",
        0.76,
      ),
    );
    output.push(
      new File(
        [blob],
        `${base}-page-${String(pageNumber).padStart(2, "0")}.jpg`,
        { type: "image/jpeg" },
      ),
    );
    page.cleanup();
    canvas.width = 1;
    canvas.height = 1;
  }
  await pdfDocument.cleanup();
  return output;
}
