

$(function () {

    "use strict";


    var swiperWorkblc = new Swiper('.portfolio-blocks .cars-block .swiper-container', {
        loop: true,
        slidesPerView: 5,
        autoplay: true,
        spaceBetween: 50,
        breakpoints: {
            1920: {
                slidesPerView: 5,
            },
            1028: {
                slidesPerView: 5,
            },
            480: {
                slidesPerView: 2,
            }
        }
    });

    var testimGrida = new Swiper('.testim-grida .swiper-container', {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        autoplay: true,
        spaceBetween: 50,
        breakpoints: {
            1920: {
                slidesPerView: 3,
            },
            1028: {
                slidesPerView: 3,
            },
            480: {
                slidesPerView: 1,
            }
        }
    });


    var scene = document.getElementById('js-scene');
    var parallax = new Parallax(scene);

    var scene2 = document.getElementById('js-scene2');
    var parallax2 = new Parallax(scene2);

});