$(document).ready(function(){
	$("#carousel").jCarouselLite({
		btnNext: "#next",
		btnPrev: "#prev"
	});
	$("#carousel img").click(function() {
	    $("#picture img").attr("src", $(this).attr("src"));
	})
});