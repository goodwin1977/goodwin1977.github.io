// let mixer = mixitup('.container-filter');

$('.products-slider').slick({
  infinite: false,
  fade: true,
  prevArrow: '<div class="arrow-prev"></div>',
  nextArrow: '<div class="arrow-next"></div>'
});

// $('.product-slider').slick({
//   infinite: false,
//   fade: true,
//   dots: true,
//   prevArrow: '<div class="arrow-prev"></div>',
//   nextArrow: '<div class="arrow-next"></div>',
//   responsive: [{
//     breakpoint: 769,
//     settings: {
//       dots: true
//     }
//   }]
// });

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.header-burger_button');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');

  button.on('click', () => toggleMenu());
  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    button.toggleClass('active');
    $('.header-burger_menu').toggleClass('active');
    $('.menu').toggleClass('black');
    $('body').toggleClass('lock');
  }
}
burgerMenu('.header-burger_menu');

window.onload = function () {
  let scrolled;
  let timer;
  document.querySelector('.up').onclick = function () {
    scrolled = window.pageYOffset;
    scrollToTop();
  };
  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 250;
      timer = setTimeout(scrollToTop, 30);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
};

window.onscroll = function showHeader() {
  let header = document.querySelector('.header-top_menu');
  let overlayHeader = document.querySelector('.header-top_menu-overlay');
  if (window.pageYOffset > 80) {
    header.classList.add('fixed');
    overlayHeader.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
    overlayHeader.classList.remove('fixed');
  }
};

$('.read_more').on('click', function (e) {
  e.preventDefault();
  $('.about-info_text, .product-info_text').toggleClass('full_text');
  $('.read_more').toggleClass('rotate');
  if ($('.about-info_text, .product-info_text').hasClass('full_text')) {
    $('.read_more').html('Свернуть<img src="images/arrow-next.svg" alt="">');
  } else {
    $('.read_more').html('Развернуть<img src="images/arrow-next.svg" alt="">');
  }
});

function filterMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.filter-button');
  let overlay = menu.find('.filter-menu_overlay');
  button.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  function toggleMenu() {
    button.toggleClass('active');
    $('.catalog-filters').toggleClass('active');
    $('body').toggleClass('lock');
  }
}
filterMenu('.catalog-filters');

function infoMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.information');
  let overlay = menu.find('.info-overlay');
  let listClose = menu.find('.info-list_close');
  button.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());
  listClose.on('click', () => toggleMenu());
  function toggleMenu() {
    button.toggleClass('active');
    $('.product-descr_nav').toggleClass('active');
    $('body').toggleClass('lock');
  }
}
infoMenu('.product-descr_nav');

function accordion(selector) {
  let accordion = $(selector);
  let spans = accordion.children('span');
  let divs = accordion.children('div');
  accordion
    .addClass('accordion')
    .on('click', '.accordion_control', function (e) {
      e.preventDefault();
      let a = $(this);
      let active = a.hasClass('accordion_control-active');
      accordion
        .find('.accordion_control-active')
        .removeClass('accordion_control-active');
      accordion
        .find('.accordion_panel-active')
        .removeClass('accordion_panel-active');
      if (!active) {
        a.addClass('accordion_control-active')
          .next()
          .addClass('accordion_panel-active');
      }
    });
  spans.each(function () {
    let span = $(this);
    span.replaceWith('<a href="#" class="accordion_control">' + span.html() + '</a>');
  });
  divs.addClass('accordion_panel');
}
accordion('#accordion');
accordion('#accordion2');

if ($(window).width() <= 768) {
  $('.delivery .container').prepend($('.delivery-info_title'));
  $('.pixel').prepend($('.basket'));
  $('.basket').append($('.basket_title-block'));
  $('.product .container').prepend($('.product_price-block'));
  $('.product .container').prepend($('.product_title'));

  $('.product-slider').slick({
    infinite: false,
    fade: true,
    dots: true,
    prevArrow: '<div class="arrow-prev"></div>',
    nextArrow: '<div class="arrow-next"></div>',
    responsive: [{
      breakpoint: 769,
      settings: {
        dots: true
      }
    }]
  });

}

if ($(window).width() <= 415) {
  for (let i = 0; i < $('.basket_item').length; i++) {
    $('.basket_item')[i].prepend($('.basket_item-title')[i]);
  }
}

$('.size-btn').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('checked');
});