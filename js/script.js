$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        animateOut: 'fadeOutRight',
        animateIn: 'fadeInLeft',
        autoplay: true,
        touchDrag: true,
        center: true,
        margin: 20,
        slideSpeed: 20000,
        dotsEach: 3,
        singleItem: true,
        autoHeight: true,
        responsiveClass: true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                loop: true
            },
            768: {
                items: 1,
                nav: true,
                loop: true
            }
        }
    });
});