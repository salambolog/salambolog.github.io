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
        slideSpeed: 15000,
        nav: false,
        singleItem: true,
        autoHeight: true,
        autoWidth: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            768: {
                items: 1,
                loop: true
            }
        }
    });
});