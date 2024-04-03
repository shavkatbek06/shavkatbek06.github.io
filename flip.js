let page = document.querySelector('.right_page');
let flipdiv = document.querySelector('.flipdiv');
let flipdiv2 = document.querySelector('.flipdiv2');


flipdiv.addEventListener('click', function() {
    console.log('click');
    page.style.transform = 'rotateY(180deg)';
  });
flipdiv2.addEventListener('click', function() {
    console.log('click');
    page.style.transform = 'rotateY(360deg)';
  });