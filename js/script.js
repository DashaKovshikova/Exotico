jQuery(function ($) {
    "use strict";

    // responsiv menu
    if ($('.fa-bars').length) {
        $('.fa-bars').on('click', function () {
            $('.header_top .inner_header nav ul').show();
            $(' .header_top .inner_header nav ul li ul.sub-menu').hide();
            $('.header_top .inner_header nav ul li ').on('mouseenter', function () {
                $(' .header_top .inner_header nav ul li ul.sub-menu').show();
                $('.header_top .inner_header nav ul li ul.sub-menu').on('mouseleave', function () {
                    $('.header_top .inner_header nav ul li ul.sub-menu').hide();
                })

            })
            $(this).hide();
            $('.fa-times').show();

        })

        $('.fa-times').on('click', function () {
            $('.header_top .inner_header nav ul').hide();
            $(this).hide();
            $('.fa-bars').show();
        })
    }


    // responsiv menu

    //    header slider
    if ($('.home_slider').length) {
        $('.home_slider').slick({
            vertical: true,
            arrows: false,
            dots: true,
            autoplay: true,
            speed: 1500,
            autoplaySpeed: 2000

        });


    }

    // carusel slider for shop item's

    // if($(.....).length)-сначала проверяет, есть ли на открытой старнице элемент с таким классом, и только потом срабатывает 
    if ($('.shop_carusel').length) {
        $('.shop_carusel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            appendArrows: $('.shop_slider_navigation'),
            prevArrow: '<div class="left"><i class="fa fa-arrow-left" aria-hidden="true"></i></div>',
            nextArrow: '<div class="right"><i class="fa fa-arrow-right" aria-hidden="true"></i></div>',
            responsive: [
                {
                    breakpoint: 414,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    }

    // popup
    if ($('.open_video').length) {
        $('.open_video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPost: false
        });
    }

    /*if ($('.testimonial_gallery').length) {
        $('.testimonial_gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function (item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    }*/

    if ($('.testy_gallery').length) {
        $('.testy_gallery').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        });
    }

    if ($('.content_slider_tweeter').length) {
        $('.content_slider_tweeter').slick({
            vertical: true,
            appendArrows: $('.tweet_slider .arrow'),
            prevArrow: ' <span class="up"><i class="fa fa-arrow-up" aria-hidden="true"></i></span>',
            nextArrow: '<span class="down"><i class="fa fa-arrow-down" aria-hidden="true"></i></span>',
            dots: false

        });


    }


    if ($('.testimonial_carousel').length) {
        $('.testimonial_carousel').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            appendArrows: $('.testimonial_slider_box'),
            prevArrow: '  <div class="left_arrow"><div class="left_1"><i class="fa fa-arrow-left" aria-hidden="true"></i></div></div>',
            nextArrow: ' <div class="right_arrow"><div class="right_1"><i class="fa fa-arrow-right" aria-hidden="true"></i></div></div>',
            responsive: [
                {
                    breakpoint: 414,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });

        $('.testimonial_carousel').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            console.log(nextSlide);
            var tabs_container = $('.testimonials_tab_container');

            tabs_container.find($('.tab_item')).hide();

            tabs_container.find($('.tab_' + nextSlide)).show();
        });


    }

});

