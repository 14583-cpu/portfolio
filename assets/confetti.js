document.addEventListener('DOMContentLoaded', function () {
  var colors = ['#E8A93D', '#C1272D', '#1F3A5F', '#FBF9F3', '#2E1226'];
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.inset = '0';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  container.style.overflow = 'hidden';
  document.body.appendChild(container);

  var count = 90;

  for (var i = 0; i < count; i++) {
    (function () {
      var piece = document.createElement('span');
      var size = Math.random() * 9 + 5;

      piece.style.position = 'absolute';
      piece.style.left = '50%';
      piece.style.top = '12%';
      piece.style.width = size + 'px';
      piece.style.height = size + 'px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      piece.style.opacity = '1';
      piece.style.willChange = 'transform, opacity';
      piece.style.transition =
        'transform ' + (1 + Math.random() * .5).toFixed(2) + 's cubic-bezier(.2,.7,.2,1), opacity 1.4s ease';

      var angle = Math.random() * Math.PI * 2;
      var distance = 140 + Math.random() * 320;
      var x = Math.cos(angle) * distance;
      var y = Math.sin(angle) * distance * 0.6 + 260; // ตกลงล่างแบบมีแรงโน้มถ่วง
      var rotate = Math.random() * 720 - 360;

      container.appendChild(piece);

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          piece.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + rotate + 'deg)';
          piece.style.opacity = '0';
        });
      });
    })();
  }

  setTimeout(function () { container.remove(); }, 1800);
});
