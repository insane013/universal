$(document).ready(function () {

  $('.menu-btn').on('click', function () {
    $(".header__menu--mobile-visible").toggleClass("header__menu--visible")
  });

  $('.bookmark').on('click', function (event) {
    event.preventDefault()
    $(this).toggleClass('bookmark--checked')
  });

  var sliderSect = new Swiper('.main-slider', {

    loop: true,
    keyboard: true,
    speed: 1000,
    
    navigation: {
      nextEl: '.slider-arrow--next',
      prevEl: '.slider-arrow--prev',
    },

  });

  $('.subscribe__form').validate({
    rules: {
      email: {
        required: true,
        minlength: 5,
        email: true
      }
    },
    messages: {
      email: {
        required: "*Введите адрес электронной почты!",
        minlength: jQuery.validator.format("*Адрес почты должен содержать не менее {0} символов!"),
        email: "*Введите корректный адрес!"
      }
    }
  },);

});