'use strict';


const menus = document.querySelectorAll('li.menus');
const sections = document.querySelectorAll('.section');

//사이트맵 열고닫기 상수 지정
const html = document.querySelector('html');
const header = html.querySelector('.header');
const btnSitemap = html.querySelector('.nav-icon');
const sitemap = html.querySelector('.nav-mobile');


//toggle 클릭했을 경우 열고 닫히는 이벤트 함수 
function toggleClick(){
  header.classList.toggle('active'); // overflow: hidden;
  btnSitemap.classList.toggle('active');
  sitemap.classList.toggle('active');
}

//함수실행
	btnSitemap.addEventListener('click', () => {
   toggleClick();
	});



window.onpageshow = function(){
  header.classList.remove('active'); // overflow: hidden;
  btnSitemap.classList.remove('active');
  sitemap.classList.remove('active');

  for(let i =0; i<menus.length; i++){
    menus[i].setAttribute("onclick","elemRemove("+i+")")
  }
}

function elemRemove(menuNum){
 location.href="http://jadoogive.com?section=" + menuNum ;
}
// 함수호출 toggleClick(); 를 함수로 만든 후, 햄버게메뉴 클릭시 열고/닫히는 이벤트와
// 모바일 메뉴클릭시 콘텐츠로 변경될때 햄버거메뉴가 닫히는 이벤트랑 동일 한번에 함수로 만듦  








//부드럽게 내려오는 

function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach(elem => {
        if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'translateY(70px)';

        } else {
            elem.style.opacity = "1";
            elem.style.transform = 'translateY(0px)';

        }
    })

}

window.addEventListener('scroll', handleScroll);

	



//footer modal

//필요한 엘리먼트들을 선택한다.
const openButton = document.getElementById("open");
const modal = document.querySelector(".modal__box");
const overlay = modal.querySelector(".md_overlay");
const closeButton = modal.querySelector(".modal-close");

//동작함수
const openModal = () => {
  modal.classList.remove("none");
}
const closeModal = () => {
  modal.classList.add("none");
}
//클릭 이벤트
openButton.addEventListener("click" , openModal);
closeButton.addEventListener("click" , closeModal);
//-->











