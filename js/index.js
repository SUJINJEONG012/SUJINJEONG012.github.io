
let btn = document.querySelectorAll("button.modal-custom-button");
let modals = document.querySelectorAll(".modal-custom");
let spans = document.getElementsByClassName("close-modal");
let overlays = document.querySelectorAll(".md_overlay");

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "flex";
    }


    spans[i].onclick = function () {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined')
                modals[index].style.display = "none";
        }
    }

    overlays[i].onclick = function () {
        for (let overlay in modals) {
            if (typeof modals[overlay].style !== 'undefined')
                modals[overlay].style.display = "none";
        }
    }


}
