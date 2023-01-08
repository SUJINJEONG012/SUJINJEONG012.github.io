'use strict'

//타이밍효과
// window.onload = function(){
const content = '안녕하세요. \n 신입개발자 정수진입니다.';
const text = document.querySelector('.text');
let i = 0;

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











