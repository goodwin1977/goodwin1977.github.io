var Link = document.querySelector(".learn-more");
var Popup = document.querySelector(".modal-pet");
var Close = Popup.querySelector(".modal-close");


  Link.addEventListener("click", function (evt) {
    evt.preventDefault();
    Popup.classList.add("modal-show");
  });


  Close.addEventListener("click", function (evt) {
    evt.preventDefault();
    Popup.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
    	  evt.preventDefault();
      if (Popup.classList.contains("modal-show")) {
        Popup.classList.remove("modal-show");
      }
    }
  });



  var Link1 = document.querySelector(".jannifer");
  var Popup1 = document.querySelector(".modal-pet-jannifer");
  var Close1 = Popup1.querySelector(".modal-close");


  Link1.addEventListener("click", function (evt) {
    evt.preventDefault();
    Popup1.classList.add("modal-show");
  });


  Close1.addEventListener("click", function (evt) {
    evt.preventDefault();
    Popup1.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
      if (Popup1.classList.contains("modal-show")) {
        Popup1.classList.remove("modal-show");
      }
    }
  });

  var Link2 = document.querySelector(".woody");
  var Popup2 = document.querySelector(".modal-pet-woody");
  var Close2 = Popup2.querySelector(".modal-close");


  Link2.addEventListener("click", function (evt) {
    evt.preventDefault();
    Popup2.classList.add("modal-show");
  });


  Close2.addEventListener("click", function (evt) {
    evt.preventDefault();
    Popup2.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
      if (Popup2.classList.contains("modal-show")) {
        Popup2.classList.remove("modal-show");
      }
    }
  });