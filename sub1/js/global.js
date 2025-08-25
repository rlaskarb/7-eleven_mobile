$(document).ready(function () {
    // 애니메이션 대상 요소를 변수에 저장
    const $expansion = $(".global_expansion");
    const $img = $expansion.find("img");
    const $text1 = $expansion.find(".global_text1");
    const $text2 = $expansion.find(".global_text2");

    let check = false; 

    // 윈도우에서 스크롤 이벤트가 발생하면 실행
    $(window).on("scroll", function () {
        // 현재 스크롤 위치
        let scroll = $(window).scrollTop();
        // 화면의 높이
        let windowHeight = $(window).height();
        // 애니메이션을 실행할 요소의 화면 상단으로부터의 거리
        let targetTop = $expansion.offset().top;

        // 요소가 화면에 보이고, 애니메이션이 아직 실행되지 않았다면
        if (scroll + windowHeight > targetTop && !check) {
            check = true; 

            // 1. 이미지 보이기 (0.5초 후)
            setTimeout(function () {
                $img.addClass("active");
            }, 500); // 0.5초

            // 2. 텍스트1 보이기 (1.5초 후)
            setTimeout(function () {
                $text1.addClass("active");
            }, 1500); // 1.5초 = 0.5초(이미지) + 1초

            // 3. 텍스트2 보이기 (2.5초 후)
            setTimeout(function () {
                $text2.addClass("active");
            }, 2500); // 2.5초 = 1.5초(텍스트1) + 1초
        }
    });
});
