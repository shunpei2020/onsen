$(function() {
  let headHeight = $('.header').outerHeight();

  $(window).on('load scroll', function() {
    if ($(window).scrollTop() > headHeight) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });
});