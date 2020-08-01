$(document).ready(function(){
  $('.reviews__slide').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src="../img/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../img/next.svg"></button>'
  });

  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1000) {
      $('.page-up').fadeIn();
    } else {
      $('.page-up').fadeOut();
    }
  });

  // modal 
  $('[data-modal=phone]').on('click', function() {
    $('.overlay, #phone-coll').fadeIn('slow');
  });

  $('.modal-phone__close').on('click', function() {
    $('.overlay, #phone-coll').fadeOut('slow');
  });

  $('#send, #send-form').on('click', function() {
    swal("Дякуємо за заявку!", "Чекайте на дзвінок!", "success");
  });
});  