$(document).ready(function () {



	// Up Arrow Show And Hide
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 25) {
			$("#up-arrow").css({
				"opacity": "1",
				"transform": "translateX(0%)"
			})
		} else {
			$("#up-arrow").css({
				"opacity": "0",
				"transform": "translateX(-200%)"
			})
		}
	})

	// Up Arrow Click
	$("#up-arrow").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 00)
	});

	


	// Enable Plugin Animation On Scroll (AOS)
	AOS.init({
		duration: 1000,
		delay: 250,
		offset: 0
	});




}); //End ready() ==> End Code JQuery