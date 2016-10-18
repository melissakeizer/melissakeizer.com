$(document).ready(function() {
  // Mobile navigation
  $('#hamburger').on('click', function(){
    $('#mobile-menu').css("display", "block");
  });
  $('#close-menu').on('click', function( event ){
      event.preventDefault();
      $('#mobile-menu').css("display", "none");
  });


});
