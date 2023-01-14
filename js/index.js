'use strict'
//필요한 엘리먼트들을 선택한다.
const openBtn = document.querySelector('.modalOpen');
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








