'use strict'

//필요한 엘리먼트들을 선택한다.
const openBtn = document.getElementById('open');
const modal = document.querySelector('.modal');


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









