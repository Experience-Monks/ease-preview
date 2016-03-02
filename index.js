module.exports = function(ease, opts) {
  opts = opts || {};

  if(opts.canvas) {
    opts.width = opts.canvas.width;
    opts.height = opts.canvas.height;
  }

  opts.width = opts.width || 200;
  opts.height = opts.height || 200;
  opts.canvas = opts.canvas || document.createElement('canvas');
  opts.boundarySize = opts.boundarySize || 100;
  opts.shouldRenderBoundary = opts.shouldRenderBoundary === undefined || opts.shouldRenderBoundary;
  opts.styleBackground = opts.styleBackground || '#FFF';
  opts.styleEase = opts.styleEase || '#000';
  opts.styleBoundary = opts.styleBoundary || '#CCC';
  opts.widthEase = opts.widthEase || 1;
  opts.widthBoundary = opts.widthBoundary || 1;

  var canvas = opts.canvas;
  canvas.width = opts.width;
  canvas.height = opts.height;

  renderPreview(ease, opts);

  return canvas;
};

function renderPreview(ease, opts) {
  var canvas = opts.canvas;
  var ctx = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var padding = opts.boundarySize;
  var heightMinusPadding = height - padding;
  var halfPadding = padding * 0.5;

  ctx.fillStyle = opts.styleBackground;
  ctx.fillRect(0, 0, width, height);

  // render edges of the graph
  if(opts.shouldRenderBoundary) {
    ctx.beginPath();
    ctx.lineWidth = opts.widthBoundary;
    ctx.strokeStyle = opts.styleBoundary;

    ctx.moveTo(0, halfPadding);
    ctx.lineTo(width, halfPadding);
    ctx.stroke();

    ctx.moveTo(0, height - halfPadding);
    ctx.lineTo(width, height - halfPadding);
    ctx.stroke();
  }

  // now render equation
  ctx.lineWidth = opts.widthEase;
  ctx.strokeStyle = opts.styleEase;

  ctx.beginPath();
  ctx.moveTo(0, height - halfPadding);

  for(var x = 0; x < width; x++) {
    var y = height - ease(x / width) * heightMinusPadding - halfPadding;

    ctx.lineTo(x, y);
  }

  // render the last 1 position
  y = height - ease(x / width) * heightMinusPadding - halfPadding;
  ctx.lineTo(x, y);

  ctx.stroke();
}