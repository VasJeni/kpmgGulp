$(document).ready(function(){
  $('.kpmg--progress__scroll').click(function () {
      var scrollhide = $('.kpmg--offer-wrapper').offset().top;
      $('html').animate({ scrollTop: scrollhide }, 1100);
  })
});