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

  $('.comment-form').validate({
    rules: {
      message: {
        required: true,
        minlength: 100,
      }
    },
    messages: {
      message: {
        required: "*Нельзя отправить пустой комментарий!",
        minlength: jQuery.validator.format("*Комментарий должен быть не короче {0} символов!"),
      }
    }
  },);

  $("[data-action='soft-scroll']").on('click', function(e) {
    console.log('click');
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top }, 1000);
      e.preventDefault();
  });

  $('.comment__load-more').on('click', function() {
    $('.comment__item--hidden').addClass('comment__item--visible');
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()/2) {
      $('.arrow-up').addClass('arrow-up--visible');
    } else {
      $('.arrow-up').removeClass('arrow-up--visible');
    }
  });

});