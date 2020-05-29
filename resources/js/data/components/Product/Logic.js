export function loadLogic() {

    $(".largeGrid").click(function () {
        $(this).find('a').addClass('active');
        $('.smallGrid a').removeClass('active');

        $('.product').addClass('large').each(function () {
        });
        setTimeout(function () {
            $('.info-large').show();
        }, 200);
        setTimeout(function () {

            $('.view_gallery').trigger("click");
        }, 400);

        return false;
    });

    $(".smallGrid").click(function () {
        $(this).find('a').addClass('active');
        $('.largeGrid a').removeClass('active');

        $('div.product').removeClass('large');
        $(".make3D").removeClass('animate');
        $('.info-large').fadeOut("fast");
        setTimeout(function () {
            $('div.flip-back').trigger("click");
        }, 400);
        return false;
    });

    $(".smallGrid").click(function () {
        $('.product').removeClass('large');
        return false;
    });

    $('.colors-large a').click(function () { return false; });


    $('.product').each(function (i, el) {

        // Lift card and show stats on Mouseover
        $(el).find('.make3D').hover(function () {
            $(this).parent().css('z-index', "20");
            $(this).addClass('animate');
        }, function () {
            $(this).removeClass('animate');
            $(this).parent().css('z-index', "1");
        });
    });


};