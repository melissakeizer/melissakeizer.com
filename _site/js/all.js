$(document).ready(function(){
  $('.variable-width').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
  // Mobile navigation
  $('#close-menu').on('click', function( event ){
    event.preventDefault();
    $('#mobile-menu').css("display", "none");
  });
  $('#hamburger').on('click', function( event ){
    event.preventDefault();
    $('#mobile-menu').css("display", "block");
  });
});