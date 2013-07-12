$("document").ready( function() {
	$("#scrollinterno").niceScroll({cursorcolor:"#C2ECE2", cursorwidth:"7px", autohidemode:"false", background:"#C0D3CF", railoffset: {top:0, left:-3}});
	$("#zona").niceScroll({cursorcolor:"#C2ECE2", cursorborder:"0", autohidemode:"false", background:"#C0D3CF", railoffset: {top:0, left:-3}});
	$("#tipo").niceScroll({cursorcolor:"#C2ECE2", cursorborder:"0", autohidemode:"false", background:"#C0D3CF", railoffset: {top:0, left:-3}});
	//assignEvents();
	console.log("Script loaded");
});

function assignEvents() {
	//Filtro - Compra/Renta
	$("#filtro a").click(function(){
		$("#filtro a").removeClass("active");
		$(this).addClass("active");
	});

	//Filtros - drop-down
	$("#filtro>div>div span").click(function(){
		if ($(this).parent().children("div").hasClass("show")) {
			$(this).parent().children("div").removeClass("show");
		} else {
			$(this).parent().children("div").addClass("show");
			$("#zona").niceScroll().resize();
			$("#tipo").niceScroll().resize();
		}
	});

	//Filtros - drop-down
	$("#filtro li").click(function(index){
	//	$("#zona li").click(function(){
  		$(".anyselector").html($(this).html());
 	});
}
/*		console.log( index + ": " + $(this).text() );
		$("#filtro>div>div").removeClass("show");
		$(this).parent().children("span").text = $("this").text()
		console.log($(this).parent().text());
		$(this).parent().addClass("seleccionado");
	});*/