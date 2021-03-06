'use strict';

$(document).ready(function() {

    var is_touch_device = 'ontouchstart' in document.documentElement;
    if(is_touch_device) $('body').addClass('sensor');

    if ($('.partners_slider').length) {
        $('.partners_slider').lightSlider({
            item: 6,
            loop: true,
            slideMove: 1,
            pager: false,
            auto: true,
            pause: 3000,
            speed: 700,
            pauseOnHover: false,
            controls:false,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        item: 4,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        item: 3,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        item: 2,
                    }
                }
            ]
        });
    }

    var wp = window.innerWidth - document.documentElement.clientWidth;

    if ($('.nav__click').length) {
        $('.nav__click').on('click', function() {
            $('.nav').addClass('active');
            $('body').addClass('o-hidden').css('margin-right', wp + 'px');
        });
        $('.nav .fa-close').on('click', function() {
            $('.nav').removeClass('active');
            $('body').removeClass('o-hidden').css('margin-right','0px');
        });
    }

    $('[href*="#"]').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
        e.preventDefault();
    });

    $(window).on("load resize scroll", function(){
        if (window.innerWidth>767) {
            if ($(window).scrollTop() > window.innerHeight/2) {
                $('.click_top').addClass('active');
            } else {
                $('.click_top').removeClass('active');
            }
        }
        else {
            $('.click_top').removeClass('active');
        }
    });

});