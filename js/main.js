// スマホ用メニューの開閉
const menuBtn = document.getElementById('menuBtn');
const gnav = document.getElementById('gnav');

menuBtn.addEventListener('click', function () {
  gnav.classList.toggle('is-open');
});
