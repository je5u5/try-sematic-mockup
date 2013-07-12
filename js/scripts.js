$("document").ready( function() {
	$("#scrollinterno").niceScroll({cursorcolor:"#C2ECE2", cursorwidth:"7px", autohidemode:"false", background:"#C0D3CF", railoffset: {top:0, left:-3}});
	$("#zona").niceScroll({cursorcolor:"#C2ECE2", cursorborder:"0", autohidemode:"false", background:"#C0D3CF", railoffset: {top:0, left:-3}});
	$("#tipo").niceScroll({cursorcolor:"#C2ECE2", cursorborder:"0", autohidemode:"false", background:"#C0D3CF", railoffset: {top:0, left:-3}});
	assignEvents();
	init_cover();
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
	/*$("#zona li").click(function(index){
	//	$("#zona li").click(function(){
  		$(".anyselector").html($(this).html());
 	});*/

 	$("#zona li").click(function(){
		$("#anyselector").html($(this).html());
		$("#zona").removeClass("show");
	});
	$("#tipo li").click(function(){
		$("#tiposelector").html($(this).html());
		$("#tipo").removeClass("show");
	});
	/*	console.log( index + ": " + $(this).text() );
		$("#filtro>div>div").removeClass("show");
		$(this).parent().children("span").text = $("this").text()
		console.log($(this).parent().text());
		$(this).parent().addClass("seleccionado");
	});*/
}

function init_cover(){
	$("body").append("<div class=whiteUp style='height: 0px; width: 100%;background: white;position: absolute;top: 150px;z-index: 10;'><div style='width: 100%;position: absolute;	background-color: white;height: 0px;'></div></div>");	
	$("body").append("<div class=whiteDown style='height: 0; width: 100%;background: white;position: absolute;top: 150px;z-index: 10;'></div>");
}	
function cover(){
	$(".whiteDown").animate({height:'100%'}, 500);
	$(".whiteUp div").animate({height:'150px',top:'-150px'}, 500);
}
function uncover(){
	$(".whiteDown").animate({height:'0'}, 500);
	$(".whiteUp div").animate({height:'0',top:'0'}, 500);
}
