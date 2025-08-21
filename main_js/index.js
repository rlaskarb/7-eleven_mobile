$(document).ready(function () {
    visualSwiper = new Swiper(".visual_swiper", {
        
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
         
        autoplay: {
            delay: 5000, 
            disableOnInteraction: false, 
        },

        pagination: {
            el: ".visual_swiper .swiper-pagination",
            clickable: true,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


        on: {
            slideChangeTransitionStart: function () {
                $('.visual_text dt, .visual_text dd').css({
                    opacity: 0,
                    transform: 'translateY(0px)'
                });
            },
            slideChangeTransitionEnd: function () {
                $('.swiper-slide-active .visual_text dt, .swiper-slide-active .visual_text dd').css({
                    opacity: 1,
                    transform: 'translateY(30px)'
                });
            }
        }
    });
});