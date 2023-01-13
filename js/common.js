'use strict'


const menus = document.querySelectorAll('li.menus');
const sections = document.querySelectorAll('.section');

//사이트맵 열고닫기 상수 지정
const html = document.querySelector('html');
const header = html.querySelector('.header');
const navmenu = html.querySelector('.navmenu');
const sitemap = html.querySelector('.nav-info');


//toggle 클릭했을 경우 열고 닫히는 이벤트 함수 
function toggleClick() {
    header.classList.toggle('active'); // overflow: hidden;
    navmenu.classList.toggle('active');

}

//함수실행
navmenu.addEventListener('click', () => {
    toggleClick();
});


window.onpageshow = function () {

    header.classList.remove('active'); // overflow: hidden;
    navmenu.classList.remove('active');
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
        if (i === menuNum % 4) {
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
        if (i === menuNum % 4) {
            window.scroll({ top: sections[i].offsetTop, behavior: 'smooth' });
            document.getElementById("menu" + (i + 1)).classList.add('active');


        } else {
            document.getElementById("menu" + (i + 1)).classList.remove('active');
        }
    }
}
