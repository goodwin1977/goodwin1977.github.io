$(document).ready(function(){
    $('.slider-one').owlCarousel({
        nav: false,
        loop:true,
        autoplay:true,
        smartSpeed:1000,
        autoplayTimeout:5000,
        items:1
    });
    $('.slider-two').owlCarousel({
        nav: true,
        loop: true,        
        items:3
    });
    $('.slider-three').owlCarousel({
        nav: true,
        loop: true,
        items:3
    }),
    $('.slider-four').owlCarousel({
        nav: true,
        loop: true,
        items:3
    })
  });