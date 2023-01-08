'use strict'

// //토글 열고 닫기
// const html = document.querySelector('html');
// const header = html.querySelector('.main_header');
// const toggleBtn = html.querySelector('.header-toggle');
// const headerOver = html.querySelector('.header-over');

// toggleBtn.addEventListener('click', () =>{
//     html.classList.toggle('active');
//     header.classList.toggle('active');
//     headerOver.classList.toggle('active');
// });


const menus = document.querySelectorAll('li.menus');
const sections = document.querySelectorAll('.section');

//사이트맵 열고닫기 상수 지정
const html = document.querySelector('html');
const header = html.querySelector('.header');
const btnSitemap = html.querySelector('.nav-icon');
const sitemap = html.querySelector('.nav-mobile');


//toggle 클릭했을 경우 열고 닫히는 이벤트 함수 
function toggleClick() {
    header.classList.toggle('active'); // overflow: hidden;
    btnSitemap.classList.toggle('active');
    sitemap.classList.toggle('active');
}

//함수실행
btnSitemap.addEventListener('click', () => {
    toggleClick();
});


window.onpageshow = function () {

    header.classList.remove('active'); // overflow: hidden;
    btnSitemap.classList.remove('active');
    sitemap.classList.remove('active');

    for (let i = 0; i < menus.length; i++) {
        menus[i].setAttribute("onclick", "elemRemove(" + i + ")")
    }
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('section');

    elemRemove2(myParam);
}


function elemRemove(menuNum) {
    for (let i = 0; i < menus.length; i++) {
        if (i === menuNum % 6) {
            window.scroll({ top: sections[i].offsetTop, behavior: 'smooth' });
            document.getElementById("menu" + (i + 1)).classList.add('active');



        } else {
            document.getElementById("menu" + (i + 1)).classList.remove('active');
        }
    }
}
// 함수호출 toggleClick(); 를 함수로 만든 후, 햄버게메뉴 클릭시 열고/닫히는 이벤트와
// 모바일 메뉴클릭시 콘텐츠로 변경될때 햄버거메뉴가 닫히는 이벤트랑 동일 한번에 함수로 만듦  

function elemRemove2(menuNum) {
    for (let i = 0; i < menus.length; i++) {
        if (i === menuNum % 6) {
            window.scroll({ top: sections[i].offsetTop, behavior: 'smooth' });
            document.getElementById("menu" + (i + 1)).classList.add('active');


        } else {
            document.getElementById("menu" + (i + 1)).classList.remove('active');
        }
    }
}
