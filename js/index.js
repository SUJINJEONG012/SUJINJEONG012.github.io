
let btn = document.querySelectorAll("button.modal-custom-button");
let modals = document.querySelectorAll(".modal-custom");
let spans = document.getElementsByClassName("close-modal");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }

    spans[i].onclick = function () {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined')
                modals[index].style.display = "none";
        }
    }

}


window.onclick = function (event) {
    if (event.target.classList.contains('modal-custom')) {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}
