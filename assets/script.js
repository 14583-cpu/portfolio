document.addEventListener('DOMContentLoaded', function () {
  // สร้างกล่องแสดงรูปขยาย (lightbox) เพิ่มเข้าไปในหน้าเว็บ
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<button class="lightbox-close" aria-label="ปิด">&times;</button><img src="" alt="">';
  document.body.appendChild(overlay);
  var overlayImg = overlay.querySelector('img');

  // ทุกรูปที่มี class="js-lightbox" จะคลิกเพื่อขยายได้
  document.querySelectorAll('.js-lightbox').forEach(function (img) {
    img.addEventListener('click', function () {
      overlayImg.src = img.currentSrc || img.src;
      overlayImg.alt = img.alt || '';
      overlay.classList.add('active');
    });
  });

  function closeLightbox() { overlay.classList.remove('active'); }

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay || e.target.classList.contains('lightbox-close')) closeLightbox();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
});
