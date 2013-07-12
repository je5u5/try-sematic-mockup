$(document).ready(function(){
	$("#carousel").jCarouselLite({
		btnNext: "#next",
		btnPrev: "#prev"
	});
	$("#carousel img").click(function() {
	    $("#picture img").attr("src", $(this).attr("src"));
	});
	$("#placeslist").jCarouselLite({
		btnNext: "#go",
		btnPrev: "#back",
		visible: 1,
		afterEnd: function (a){
			title = a.find("span").attr("title")
			src = a.find("span").attr("src")

			$("#logos img").attr("src",src)
			$("#logos span").html(title)
		}
	});
});
