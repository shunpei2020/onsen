$(function () {
  $('.burger').on('click', function () {
    $('.nav-links').fadeToggle(500);
    $(this).toggleClass('toggle')
    $('body').toggleClass('noscroll');
  });

  $('.nav-links li').on('click', function () {
    $('.burger').removeClass('toggle');
    $('.nav-links').fadeOut(500);
    $('body').removeClass('noscroll');
  });
});