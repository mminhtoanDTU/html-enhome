$(document).ready(function () {
    $(".slider__list").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        draggable: false,
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    });
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
