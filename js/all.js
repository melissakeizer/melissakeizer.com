$(document).ready(function() {

  // Matching the grid square's height with thier fluid width
   var itemwidth = $('footer .photos').height();
  $('.instagram-block').css({
    'height': itemwidth + 'px'
  });



  // Randomising the background image set for the flickr div
  var images = ['squirrel-mkeizer.jpg', 'sumatran-tiger-mkeizer.jpg', 'giants-causeway-mkeizer.jpg', 'matisse-mkeizer.jpg', 'cleo-mkeizer.jpg', 'ladygaga-mkeizer.jpg', 'glenoe-mkeizer.jpg', 'lighthouse-mkeizer.jpg' ];
  $('ul.home-grid li.flickr').css({'background-image': 'url(img/photography-array/' + images[Math.floor(Math.random() * images.length)] + ')'});

  // Randomising the background image set for the flickr div
  var shots = ['belfast-ruby-macbook.jpg', 'reverspective.jpg', 'the-laboratory.jpg', 'belfast-ruby.jpg', 'SRLabs.jpg'];
  $('ul.home-grid li.dribbble').css({'background-image': 'url(img/dribbble-shots/' + shots[Math.floor(Math.random() * shots.length)] + ')'});

  // Mobile navigation
  $('#hamburger').on('click', function(){
    $('#mobile-menu').css("display", "block");
  });
  $('#close-menu').on('click', function( event ){
      event.preventDefault();
      $('#mobile-menu').css("display", "none");
  });


});
