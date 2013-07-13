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

	function dropDown(){
		if ($(this).parent().children("div").hasClass("show")) {
			$(this).parent().children("div").removeClass("show");
		} else {
			$(this).parent().children("div").addClass("show");
			$("#zona").niceScroll().resize();
			$("#tipo").niceScroll().resize();
		}

	}
	
	//Filtros - drop-down
	$("#filtro>div>div span").first().click(dropDown);

 	$("#zona li").on("click",unlock);

 	function unlock(){
		$("#anyselector").html($(this).html());
		$("#zona").removeClass("show");
		
		$("#filtro>div>div span").last().click(dropDown);
		//Filtros - tipos
		$("#tipo li").click(function(){
			$("#tiposelector").html($(this).html());
			$("#tipo").removeClass("show");
		});
		$("#zona li").off("click",unlock);
		$("#zona li").on("click",changeZone);
	}
	function changeZone(){
		$("#anyselector").html($(this).html());
		$("#zona").removeClass("show");
	}

	//Ordenación - drop-down
	$("#ordenacion>div span").first().click(dropDown);

 	$("#ordenOp li").on("click",unlock);

 	function unlock(){
		$("#ordenSeleccionado").html($(this).html());
		$("#ordenOp").removeClass("show");
		
		$("#ordenacion>div span").last().click(dropDown);
		//Filtros - tipos
		$("#criterioOp li").click(function(){
			$("#criterioSeleccionado").html($(this).html());
			$("#criterioOp").removeClass("show");
		});
		$("#ordenOp li").off("click",unlock);
		$("#ordenOp li").on("click",changeZone);
	}
	function changeZone(){
		$("#ordenSeleccionado").html($(this).html());
		$("#ordenOp").removeClass("show");
	}
}

function init_cover(){
	$("body").append("<div class=whiteUp style='height: 0px; width: 100%;background: white;position: absolute;top: 0px;z-index: 10;'><div style='width: 100%;position: absolute;	background-color: white;height: 150px; bottom:-150px;'></div></div>");
	$("body").append("<div class=whiteDown style='height: 100%; width: 100%;background: white;position: absolute;top: 150px;z-index: 10;'></div>");
}	
function cover(){
	$(".whiteDown").animate({height:'100%'}, 500);
	$(".whiteUp div").animate({height:'150px'}, 500);
}
function uncover(){
	$(".whiteDown").animate({height:'0'}, 500);
	$(".whiteUp div").animate({height:'0'}, 500);
}
function flasheo(){
	init_cover();
	uncover();
}
window.onload = flasheo;