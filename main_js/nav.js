$(document).ready(function () {
    const $header = $('#headerArea');
    const $gnb = $('#gnb');
    const $blindBox = $('.blind_box');


    $('.menu_ham , blind_box').click(function (e) {
        e.preventDefault();

        $header.toggleClass('mn_open');
        if ($header.hasClass('mn_open')) {
            $blindBox.show();
            $gnb.css('height', $(document).height());
        } else {
            $blindBox.hide();
        }
    })

    $('.main_menu h3 a').click(function (e) {
        e.preventDefault();
        const $clickLi = $(this).closest('li');

        if ($clickLi.hasClass('active')){
            $clickLi.removeClass('active');
        } else {
            $('#gnb .main_menu li').removeClass('active');
            $clickLi.addClass('active');
            
        }
    })

});
