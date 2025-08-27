$(document).ready(function () {
    const $header = $("#headerArea");
    const $historyNav = $(".history_nav");
    const $navLinks = $historyNav.find("a");
    const navHeight = $historyNav.outerHeight();

    const $stickyTrigger = $(".sticky_trigger");

    if ($stickyTrigger.length > 0) {
        const stickyObserver = new IntersectionObserver(
            function (entries) {
                const entry = entries[0];
                if (!entry.isIntersecting) {
                    $header.hide();
                    $historyNav.addClass("fixed");
                } else {
                    $header.show();
                    $historyNav.removeClass("fixed");
                }
            },
            { threshold: 0 }
        ); // 1px라도 사라지면 실행!
        stickyObserver.observe($stickyTrigger[0]);
    }
    //  스크롤 스파이는 또 뭐여 옵져버 실어하는데
    const $historySections = $(".history_decade");
    if ($historySections.length > 0) {
        const scrollspyObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        const targetId = "#" + $(entry.target).attr("id");
                        $navLinks.parent().removeClass("on");
                        $navLinks.filter(`[href="${targetId}"]`).parent().addClass("on");
                    }
                });
            },
            // 화면 중앙 (50%)을 기준으로 , 위 아래 40% 영역에 들와왔을때를 감지????????
            { rootMargin: "-40% 0px -60% 0px", threshold: 0 }
        );
        $historySections.each(function () {
            scrollspyObserver.observe(this);
        });
    }
    //  클릭시 부드럽게 이동
    $navLinks.on("click", function (event) {
        event.preventDefault();
        const targetSelector = $(this).attr("href");
        const $targetElement = $(targetSelector);
        if ($targetElement.length) {
            const offsetPosition = $targetElement.offset().top - navHeight - 50;
            $("html , body").animate({ scrollTop: offsetPosition }, 500);
        }
    });
});
