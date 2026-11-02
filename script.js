const revealItems = document.querySelectorAll(".reveal");
const skillBars = document.querySelectorAll(".bar div");


function revealContent() {

    revealItems.forEach(function(item) {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            item.classList.add("show");
        }

    });


    skillBars.forEach(function(bar) {

        const top = bar.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            bar.style.width = bar.dataset.width;
        }

    });

}


window.addEventListener("load", revealContent);
window.addEventListener("scroll", revealContent);

revealContent();