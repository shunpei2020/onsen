$(function() {

  $('.header-reserve').click(function() {
    $('.modal-musk').fadeIn(1000);
    $('.modal').fadeIn(1000);
  });

  $('.close').click(function() {
    $('.modal').fadeOut(1000);
    $('.modal-musk').fadeOut(1000);
  });
});