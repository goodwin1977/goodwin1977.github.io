$(document).ready(function(){

  $('.slider-dotshead').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.sites__slider',
    prevArrow: '<img class="slider-arrows sites-arrows__left" src="img/sites-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider-arrows sites-arrows__right" src="img/sites-right.svg" alt="arrow-right">'
  });
  $('.sites__slider').slick({
    infinite: true,
    fade: true,
    asNavFor: '.slider-dotshead',
    arrows: false
  });
  $('.reviews__list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow-right">',
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
  $('.brands').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="arrow-right">',
    responsive: [
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true
        }
      }
    ]
  });

  $("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});


})
