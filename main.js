window.CANVAS_WIDTH = 500;
window.CANVAS_HEIGHT = 500;

function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

window.canvasClick = function(canvas, e) {
  var position = getMousePos(canvas, e);
  window.cachedImageData = window.ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  floodFill(position.x, position.y, 255, 0, 0);
  window.ctx.putImageData(window.cachedImageData, 0, 0);
}

function drawRandomCircles(count) {
  while (count--) {
    drawCircle(Math.random() * CANVAS_WIDTH, Math.random() * CANVAS_HEIGHT, Math.random() * CANVAS_WIDTH);
  }
}

window.onload = function() {
  // Set a global variable to the canvas' context
  var c = document.getElementById("floodFillCanvas");
  window.ctx = c.getContext("2d");

  // Add a click event listener
  c.addEventListener('click', window.canvasClick.bind(null, c), false);

  drawRandomCircles(10);
};
