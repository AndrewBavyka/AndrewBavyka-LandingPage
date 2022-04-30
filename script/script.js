let header = $('.header'),
    scrollPrev = 0;
$(window).scroll(function () {
    let scrolled = $(window).scrollTop();

    if (scrolled > 50 && scrolled > scrollPrev) {
        header.addClass('out');
    } else {
        header.removeClass('out');
    }
    scrollPrev = scrolled;
});

//Бургер меню на разрешении 768px
const headerBurger = document.querySelector(`.header__burger`);
if (headerBurger) {
    const menuBody = document.querySelector(`.header__menu`);
    headerBurger.addEventListener("click", function (e) {
        headerBurger.classList.toggle(`active`);
        menuBody.classList.toggle(`active`);
    });
}

let changeLanguage = document.getElementById("change__lang");
let btns = changeLanguage.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}