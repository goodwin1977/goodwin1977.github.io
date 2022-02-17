$(document).ready(function(){
  $('.cont-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
});
$('.hamburger').click(function() {
  $('.header-menu__mobile').toggleClass('show-mobile__menu');
});