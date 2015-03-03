$(document).ready(function() {

  // Matching the grid square's height with thier fluid width
   var itemwidth = $('ul.home-grid li').width();
  $('ul.home-grid li').css({
    'height': itemwidth + 'px'
  });

  // Same thing except for social icons
    var itemwidth2 = $('.social-grid a').width();
  $('.social-grid a').css({
    'height': itemwidth2 + 'px'
  });

  // Same thing except for work examples
    var itemwidth3 = $('ul.work-grid li').width();
  $('ul.work-grid li').css({
    'height': itemwidth3 + 'px'
  });

  // Randomising the background image set for the flickr div
  var images = ['squirrel-mkeizer.jpg', 'cheryl-mkeizer.jpg', 'giants-causeway-mkeizer.jpg', 'matisse-mkeizer.jpg'];
  $('ul.home-grid li.flickr').css({'background-image': 'url(/img/photography-array/' + images[Math.floor(Math.random() * images.length)] + ')'});

  // Randomising the background image set for the flickr div
  var shots = ['belfast-ruby.jpg', 'belfast-ruby-macbook.jpg'];
  $('ul.home-grid li.dribbble').css({'background-image': 'url(/img/dribbble-shots/' + shots[Math.floor(Math.random() * shots.length)] + ')'});

});
