document.addEventListener('DOMContentLoaded', function () {
  var colors = ['#E8A93D', '#C1272D', '#1F3A5F', '#FBF9F3', '#2E1226'];

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.inset = '0';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  container.style.overflow = 'hidden';
  document.body.appendChild(container);

  // ระเบิดกลิตเตอร์จากจุด (x, y) ที่กำหนด จำนวน count ชิ้น
  function burst(x, y, count) {
    for (var i = 0; i < count; i++) {
      (function () {
        var piece = document.createElement('span');
        var size = Math.random() * 9 + 5;

        piece.style.position = 'absolute';
        piece.style.left = x + 'px';
        piece.style.top = y + 'px';
        piece.style.width = size + 'px';
        piece.style.height = size + 'px';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.opacity = '1';
        piece.style.willChange = 'transform, opacity';
        piece.style.transition =
          'transform ' + (0.7 + Math.random() * .5).toFixed(2) + 's cubic-bezier(.2,.7,.2,1), opacity 1.1s ease';

        var angle = Math.random() * Math.PI * 2;
        var distance = 60 + Math.random() * 160;
        var dx = Math.cos(angle) * distance;
        var dy = Math.sin(angle) * distance * 0.6 + 90; // แรงโน้มถ่วงเบา ๆ
        var rotate = Math.random() * 720 - 360;

        container.appendChild(piece);

        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            piece.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + rotate + 'deg)';
            piece.style.opacity = '0';
          });
        });

        setTimeout(function () { piece.remove(); }, 1300);
      })();
    }
  }

  // ระเบิดใหญ่ตอนเข้าเว็บครั้งแรก (กลางบนของจอ)
  burst(window.innerWidth / 2, window.innerHeight * 0.12, 90);

  // ระเบิดเล็ก ๆ ทุกครั้งที่คลิกบนหน้าเว็บ (ตรงจุดที่คลิก)
  document.addEventListener('click', function (e) {
    burst(e.clientX, e.clientY, 22);
  });
});
