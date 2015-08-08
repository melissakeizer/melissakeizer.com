$(document).ready(function() {

  // Matching the grid square's height with thier fluid width
   var itemwidth = $('ul.home-grid li').width();
  $('ul.home-grid li').css({
    'height': itemwidth + 'px'
  });

  // Matching the photo grid square's height with thier fluid width
   var itemwidth = $('ul.photo-grid li').width();
  $('ul.photo-grid li').css({
    'height': itemwidth + 'px'
  });

  // Same thing except for social icons
    var itemwidth2 = $('.social-grid a').width();
  $('.social-grid a').css({
    'height': itemwidth2 + 'px'
  });

  // Matching the photo grid square's height with thier fluid width - images
   var itemwidth = $('.photo-grid img').width();
  $('.photo-grid img').css({
    'height': itemwidth + 'px'
  });

  // Randomising the background image set for the flickr div
  var images = ['squirrel-mkeizer.jpg', 'sumatran-tiger-mkeizer.jpg', 'cheryl-mkeizer.jpg', 'giants-causeway-mkeizer.jpg', 'matisse-mkeizer.jpg', 'cleo-mkeizer.jpg', 'ladygaga-mkeizer.jpg', 'glenoe-mkeizer.jpg', 'lighthouse-mkeizer.jpg' ];
  $('ul.home-grid li.flickr').css({'background-image': 'url(img/photography-array/' + images[Math.floor(Math.random() * images.length)] + ')'});

  // Randomising the background image set for the flickr div
  var shots = ['belfast-ruby-macbook.jpg', 'reverspective.jpg', 'the-laboratory.jpg', 'belfast-ruby.jpg'];
  $('ul.home-grid li.dribbble').css({'background-image': 'url(img/dribbble-shots/' + shots[Math.floor(Math.random() * shots.length)] + ')'});

});
