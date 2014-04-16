// A $( document ).ready() block.
$(document).ready(function() {
  //   $(".pc-play-button").click(function() {
  //   	$('body').blurjs({
		// 	source: 'body',			//Background to blur
		// 	radius: 5,			//Blur Radius
		// 	overlay: '',			//Overlay Color, follow CSS3's rgba() syntax
		// 	offset: {			//Pixel offset of background-position
		// 		x: 0,
		// 		y: 0
		// 	},
		// 	optClass: '',			//Class to add to all affected elements
		// 	cache: false,			//If set to true, blurred image will be cached and used in the future. If image is in cache already, it will be used.
		// 	cacheKeyPrefix: 'blurjs-',	//Prefix to the keyname in the localStorage object
		// 	draggable: false		//Only used if jQuery UI is present. Will change background-position to fixed
		// });
  //   });
	var iframes = $('iframe');

	$('.pc-play-button').click(function() {
	    iframes.attr('src', function() {
	        return $(this).data('src');
	    });
	});

	iframes.attr('data-src', function() {
	    var src = $(this).attr('src');
	    $(this).removeAttr('src');
	    return src;
	});
});