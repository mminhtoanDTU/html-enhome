$(document).ready(function () {
    $(".slider__list").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        draggable: false,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
});

//Header toggle
const menu = document.querySelector(".header__menu");
const btnBar = document.querySelector(".header__btn-bars");
const btnClose = document.querySelector(".header__btn-close");

btnBar.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
        menu.classList.add("active");
    }

    document.body.style.overflow = "hidden";
});

btnClose.addEventListener("click", () => {
    menu.classList.remove("active");

    document.body.style.overflow = "auto";
});

// BENEFIT TABS
const tabsControl = document.querySelectorAll(".benefit__control-item");
const tabsContent = document.querySelectorAll(".benefit__content");
tabsControl.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        tabsContent.forEach((tabContent) => {
            tabContent.classList.remove("active");
        });
        tabsControl.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        target.classList.add("active");
    });
});
