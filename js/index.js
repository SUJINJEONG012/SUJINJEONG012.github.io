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





//타이밍효과

const content = '안녕하세요. \n 프론트개발을 하고 싶은 퍼블리셔 정수진입니다.';
const text = document.querySelector('.text');
let i = 0;

function sleep(delay){
    const start = new Date().getTime();
    while (new Date().getTime()< start+delay);
}
// function typing(){
//     text.textContent += content[i++];
//     if(i > content.length){
//         text.textContent = ''
//         i = 0;
//         sleep(3000);
//     }
// }


function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
        sleep(3000);
    }
}


setInterval(typing, 200);





