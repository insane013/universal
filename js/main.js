$(document).ready(function () {
  Change();
  $("[data-interact='tab']").on('click', Change);

  function Change() {
    $("[data-interact='tab']").each(function () {
      // console.log($("[data-interact='tab']"));
      if ($(this).is(':checked')) {
        // console.log("checked");
        $($(this).attr("value")).addClass("header-content--active");
      } else {        
        $($(this).attr("value")).removeClass("header-content--active");
      }
    });
    if ($("#tab-2").is(':checked')) {
      // console.log('2 checked');
    }
  }

  $('.menu-btn').on('click', function () {
    $(".header__menu--mobile-visible").toggleClass("header__menu--visible")
  });
  $('.tab-btn').on('click', function () {
    $(".header-main__tabs").toggleClass("header-main__tabs--visible")
    $(".tab-btn").toggleClass("tab-btn--tabs-visible")
  });
  $('.bookmark').on('click', function (event) {
    event.preventDefault()
    $(this).toggleClass('bookmark--checked')
  });

  var sliderSect = new Swiper('.slider-section__slider', {

    loop: true,
    keyboard: true,
    autoplay: true,
    delay: 3000,
    speed: 1000,
    pagination: {
      el: '.slider-section__slider-pagination',
      clickable: true,
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

  $("[data-action='soft-scroll']").on('click', function(e) {
    console.log('click');
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top }, 1000);
      e.preventDefault();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > $(window).height()/2) {
      $('.arrow-up').addClass('arrow-up--visible');
    } else {
      $('.arrow-up').removeClass('arrow-up--visible');
    }
  });

});