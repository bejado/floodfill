window.cachedImageData = undefined;

function drawPixel(x, y, r, g, b) {
  cachedImageData.data[x * 4 + y * CANVAS_WIDTH * 4 + 0] = r;
  cachedImageData.data[x * 4 + y * CANVAS_WIDTH * 4 + 1] = g;
  cachedImageData.data[x * 4 + y * CANVAS_WIDTH * 4 + 2] = b;
  cachedImageData.data[x * 4 + y * CANVAS_WIDTH * 4 + 3] = 255;
}

function getPixel(x, y) {
  return {
    r: cachedImageData.data[x * 4 + y * CANVAS_WIDTH * 4 + 0],
    g: cachedImageData.data[x * 4 + y * CANVAS_WIDTH * 4 + 1],
    b: cachedImageData.data[x * 4 + y * CANVAS_WIDTH * 4 + 2]
  };
}

function drawCircle(x, y, radius) {
  window.ctx.beginPath();
  window.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
  window.ctx.lineWidth = 1;
  window.ctx.strokeStyle = '#00FF00';
  window.ctx.stroke();
}

