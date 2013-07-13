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

			//$("body").css("background-image",src)

			$('#mask').css({height: $(window).height(),width: $(window).width()})
              .fadeIn('slow', function(){

              	  $('#imgbg').css('background-image', src);
                  $('#mask').fadeOut('slow');
            });
		}
	});
	$('#imgbg').css({height: $(window).height(),width: $(window).width()});
});
