'use strict'

//토글 열고 닫기
const html = document.querySelector('html');
const header = html.querySelector('.main_header');
const toggleBtn = html.querySelector('.header-toggle');
const headerOver = html.querySelector('.header-over');

toggleBtn.addEventListener('click', () =>{
    html.classList.toggle('active');
    header.classList.toggle('active');
    headerOver.classList.toggle('active');
});
