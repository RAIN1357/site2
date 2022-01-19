$(function () {
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/images/arrup.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/images/arrdown.svg" alt=""></button>',
        vertical: true,
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    dots: true,
                    arrows: true,
                }
            }
        ]
    });



    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="/images/up.svg" alt=""></button>',
        nextArrow: '<button type="button" class="product-next"><img src="/images/down.svg" alt=""></button>',

    });
    $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false,
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

});
