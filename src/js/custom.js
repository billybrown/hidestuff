(function($){

	/////////////////////////////////////-+++-
	// plugin initialization

		// this makes all videos responsive inside the main content area
		$(".SiteMain").fitVids();

		// placeholder fallbacks
		$('input, textarea').placeholder();




	/////////////////////////////////////-+++-
	// custom global functions

		var classTrigger = function(trigger, receiver, classer) {
			// trigger the adding and removing of classes. Actual animation is handled by CSS.
			$(trigger).click(function() {
				$(receiver).toggleClass(classer);
			});
		};

		var slideTrigger = function(trigger, receiver, closeText, openText) {
			// show and hide things using jquery slidetoggle. 
			// Use this for when you don't know the size of thing your showing and hiding.
			// Also change the trigger html text, "show" to "hide", etc.
			// example: slideTrigger('.Thing__trigger', '.Thing__content', 'Show thing +', 'Hide thing -');

			$(trigger).click(function() {
				$(receiver).slideToggle(500, function() {
				    $(trigger).text($(this).is(':visible') ? closeText : openText);
				});
			});
		};


	/////////////////////////////////////-+++-
	// Example base js
	//

	$('.Example__trigger').click(function() {
		$(this).closest('.Example').toggleClass('js-active');
	});

	$('.Example__close, .Example__cover').click(function() {
		$(this).closest('.Example').removeClass('js-active');
		$(this).closest('.Example').find('.Example__trigger').html('Click me');
	});

	$('#Method2-example1 .Example__trigger').click(function() {
		if ($(this).html() == 'x') {
			$(this).html('Click me');
		} else {
			$(this).html('x');
		}
	});

	$('#Method3-example4 .Example__trigger').click(function() {
		$(this).remove();
	});

//-+++- DONT REMOVE THIS COMMENT! its used by yeoman | js -+++-//



})(jQuery);