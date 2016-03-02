var easePreview = require('./..');
var eases = require('eases');

for(var i in eases) {
  var preview = document.body.appendChild(
    easePreview(eases[ i ])
  );

  preview.style.display = 'block';
}