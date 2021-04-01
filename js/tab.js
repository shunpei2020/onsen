$(function() {

  $('.tabs span').click(function() {
    var index = $('.tabs span').index(this);
    $('.tabs span').removeClass('active');
    
    $(this).addClass('active');
    
    $('.info-box').removeClass('show').eq(index).addClass('show');
  });
});