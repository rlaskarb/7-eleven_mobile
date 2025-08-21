$(document).ready(function () {
    visualSwiper = new Swiper(".visual_swiper", {
        
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,

        pagination: {
            el: ".visual_swiper .swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
