$(document).ready(function(){
  $('.slider').slick({
    fade: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $('.products__slider').slick({
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.brands__slider').slick({
    infinite: true,
    speed: 300,
    arrows: false,
    // slidesToShow: 1,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 4000,
    variableWidth: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 413,
        settings: {
          slidesToShow: 1
        }
      }
    ] 
  });

  $('.hamburger').on('click', function() {
    $('.menu__mobile').toggleClass('active');
    $('.header__info-search').toggleClass('show-search');
  })

});