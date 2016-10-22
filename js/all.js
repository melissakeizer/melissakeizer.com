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
  $('#menuicon label').on( "click", function( event ) {
		$('#menuicon').toggleClass( "ontop" );
		$('#mobile-menu').toggleClass( "visible" );
  });
	AOS.init({
		easing: 'ease-in-out-sine'
	});
});