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
			//name = a.find("span").attr("class")
			src = a.find("span").attr("title")

			//$("#logos img").attr("src",src)
			//$("#logos span").html(name)
			$("body").css("background-image",src)
		}
	});
});
