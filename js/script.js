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
        nav: false,
        singleItem: true,
        autoHeight: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoWidth: true,
                autoHeight: true
            },
            768: {
                items: 1,
                loop: true
            }
        }
    });
});