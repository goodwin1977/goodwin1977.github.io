/* jshint esversion: 6 */
window.onscroll = function () {
  let scrollElem = document.getElementById("scrollToUp-btn");
  if (window.scrollY > 200) {
    scrollElem.style.opacity = "1";
  } else {
    scrollElem.style.opacity = "0";
  }
};

window.onload = function () {
  var scrolled;
  var timer;

  document.getElementById('scrollToUp-btn').onclick = function () {
    scrolled = window.pageYOffset;
    scrollToTop();
  };

  function scrollToTop() {
    if (scrolled > 0) {
      window.scrollTo(0, scrolled);
      scrolled = scrolled - 100;
      timer = setTimeout(scrollToTop, 30);
    } else {
      clearTimeout(timer);
      window.scrollTo(0, 0);
    }
  }
};

var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};
let body = document.querySelector('body');
if (isMobile.any()) {
  body.classList.add('touch');
  var arrow = document.querySelectorAll('.arrow');
  for (i = 0; i < arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];

    thisLink.classList.add('parent');
    arrow[i].addEventListener('click', () => {
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');
    });
  }
} else {
  body.classList.add('mouse');
}