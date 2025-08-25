$(document).ready(function () {
    const $expansion = $(".global_expansion");
    const $img = $expansion.find("img");
    const $text1 = $expansion.find(".global_text1");
    const $text2 = $expansion.find(".global_text2");
    const $title_h3 = $(".global_seven_title h3");
    const $title_p = $(".global_seven_title p");
    let check = false;

    $(window).on("scroll", function () {
        // 현재 스크롤 위치
        let scroll = $(window).scrollTop();
        // 화면 전체 높이
        let windowHeight = $(window).height();
        // 애니매이션을 실행할  화면 상단으로부터 거리
        let targetTop = $expansion.offset().top;

        if (scroll + windowHeight > targetTop && !check) {
            check = true;

            setTimeout(function () {
                $title_h3.addClass("active");
            }, 500);

            setTimeout(function () {
                $title_p.addClass("active");
            }, 1000);

            setTimeout(function () {
                $img.addClass("active");
            }, 1500);

            setTimeout(function () {
                $text1.addClass("active");
            }, 2000);

            setTimeout(function () {
                $text2.addClass("active");
            }, 2500);
        }
    });
});