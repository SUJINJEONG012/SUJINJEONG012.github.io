'use strict'

//타이밍효과
// window.onload = function(){
// const content = '안녕하세요. \n 신입개발자 정수진입니다.';
// const text = document.querySelector('.text');
// let i = 0;

function sleep(delay) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


function typing() {
    let txt = content[i++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
        sleep(3000);
    }
}
setInterval(typing, 200);
// }



//모달창

//필요한 엘리먼트들을 선택한다.
const openBtn = document.getElementById('open');
const modal = document.querySelector('.modal');
const overlay = modal.querySelector('.md_overlay');
const closeBtn = modal.querySelector('button');


//동작 함수

const openModal = () => {
    modal.classList.remove('hidden');
}
const closeModal = () => {
    modal.classList.add('hidden');
}

//클릭이벤트

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);









