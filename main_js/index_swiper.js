$(document).ready(function () {
    visualSwiper = new Swiper(".visual_swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },

        pagination: {
            el: ".visual_swiper .swiper-pagination",
            clickable: true,
        },

        on: {
            slideChangeTransitionStart: function () {
                $(".visual_text dt, .visual_text dd").css({
                    opacity: 0,
                    transform: "translateY(30px)",
                });
            },
            slideChangeTransitionEnd: function () {
                $(".swiper-slide-active .visual_text dt, .swiper-slide-active .visual_text dd").css({
                    opacity: 1,
                    transform: "translateY(10px)",
                });
            },
        },
    });

    // 창업안내 스와이퍼
    visualSwiper = new Swiper(".start_up_guide_swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,

        pagination: {
            el: ".start_up_guide_swiper .swiper-pagination",
            clickable: true,
        },
    });

    
});
