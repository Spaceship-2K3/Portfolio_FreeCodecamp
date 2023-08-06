const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelector(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
    sectBtn.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].classList.remove("active-btn");
            e.target.classList.add("active-btn");
        });
    });

    // todo : section active class
    allSections.addEventListener("click", function (e) {
        let id = e.target.dataset.id;
        if (id) {
            // // todo : remove selected from the other btns
            // sectBtns.forEach((btn) => {
            //     btn.classList.remove("active");
            // });
            // e.target.classList.add("active");

            // todo : hide other sections
            sections.forEach((section) => {
                section.classList.remove("active");
            });

            let element = document.getElementById(id);
            element.classList.add("active");
        }
    });
}

PageTransitions();
