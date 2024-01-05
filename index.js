const scanner = new jscanify();
image.onload = function () {
    const highlightedCanvas = scanner.highlightPaper(image);
    const points = getCornerPoints(findPaperContour(image))
    document.body.appendChild(highlightedCanvas);
};