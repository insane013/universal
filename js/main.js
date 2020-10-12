$(document).ready(function () {
  Change();
  $("[data-interact='tab']").on('click', Change);

  function Change() {
    $("[data-interact='tab']").each(function () {
      console.log($("[data-interact='tab']"));
      if ($(this).is(':checked')) {
        console.log("checked");
        $($(this).attr("value")).addClass("header-content--active");
      } else {
        console.log("not checked");
        $($(this).attr("value")).removeClass("header-content--active");
      }
    });
    if ($("#tab-2").is(':checked')) {
      console.log('2 checked');
    }
  }

});