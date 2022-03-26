
(function($) {
    "use strict"; 
	

	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});
 
    // $( '.hamburger-menu' ).on( 'click', function()
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.menu-nav').toggleClass('show');
    });    

    /* Back To Top Button */
    // create the back to top button
    $('body').prepend('<a href="#" class="back-to-top page-scroll">Back to Top</a>');
    var amountScrolled = 500;
    $(window).scroll(function() {
        if ($(window).scrollTop() > amountScrolled) {
            $('a.back-to-top').fadeIn('500');
        } else {
            $('a.back-to-top').fadeOut('500');
        }
    });


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);


window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".header-nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky").style = 'bs'
  } else {
    navbar.classList.remove("sticky");
  }
}