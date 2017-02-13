/*var desplegado=false;
$(document).ready(function(){
	$(".icon").click(function(){
		if(!desplegado){
		$("#menu").css("height", "150px");
		$("#menu").show();
		$("#menu ul li").hide();
		$("#menu ul li.icon").show();
		desplegado=true;
	}
	else{
		$("#menu").css("height", "40px");
		$("#menu").show();
		$("#menu ul li").show();
		$("#menu ul li.icon").show();
		desplegado=false; 
	}
	});
});*/



function mostrarInfo(i){
	if($(window).width() > 400){
		$("#fondo" + i).css("background-color", "black");
		$("#fondo" + i).fadeTo("fast", 0.5);
		$("#titulo" + i).fadeTo("fast", 0.0);
		$("#titulo" + i).css("z-index", "0");
		$("#subtitulo" + i).fadeTo("fast", 0.0);
		$("#subtitulo" + i).css("z-index", "0");
		$("#fondo" + i).css("display", "block");
		$("#texto" + i).css("z-index", "5");
		$("#img" + i).css("z-index", "-1");
		$("#info" + i).fadeTo("fast", 1.0);
	}
}
function cambiarSeccion(i){
	var url;
	if(i == 1){
		url = "noticias.html";
	}
	else if(i == 2){
		url = "empleo.html";
	}
	else if(i == 3){
		url = "becas.html";
	}
	else if(i == 4){
		url = "formacion.html";
	}
	else if(i == 5){
		url = "estudiantes.html";
	}
	else if(i == 6){
		url = "seguros.html";
	}
	else if(i == 0){
		url = "index.html";
	}
	
	window.location.href = url; 
}
function entrarSeccion(i){
	var j;
	$('#' + i).fadeTo("slow", 0.0);
	for(j = 1; j <= 6; j++){
		if(i != j){
			if(j%2 == 0){
				$('#' + j).animate({ left: 800}, 700, "swing");
				$('#' + j).fadeTo("fast", 0.0);
			}
			else{
				$('#' + j).animate({ right: 1000}, 700, "swing");
				$('#' + j).fadeTo("fast", 0.0);
			}
		}
	}
	
	//setTimeout(function(){
		//			$("#panel" + i).fadeTo("fast", 1.0);
			//	}
	//, 300);
	setTimeout(function(){ 
		var url;
		if(i == 1){
			url = "noticias.html";
		}
		else if(i == 2){
			url = "empleo.html";
		}
		else if(i == 3){
			url = "becas.html";
		}
		else if(i == 4){
			url = "formacion.html";
		}
		else if(i == 5){
			url = "estudiantes.html";
		}
		else if(i == 6){
			url = "seguros.html";
		}
		else if(i == 0){
			url = "index.html";
		}
		window.location.href = url; 
	}, 1000);
}

function ocultarInfo(i){
	$("#img" + i).show();
	$("#info" + i).hide();
	$("#img" + i).css("z-index", "0");
	$("#titulo" + i).css("z-index", "1");
	$("#titulo" + i).fadeTo("fast", 1.0);
	setTimeout(function(){
					if($(window).width() > 400){
						$("#subtitulo" + i).fadeTo("fast", 1.0);
						$("#subtitulo" + i).css("z-index", "1");
					}
				}
	, 350);
}

 //Muestra la memoria en la pantalla
 function mostrarMemoria(){ 
  
	  $("#opacidad").fadeTo("fast", 0.5);
	  $("#opacidad").css("z-index", "0");
	  $("#opacidad").css("display", "block");
	  $("#marcoConfirmar5").fadeTo("fast", 1.0);
	  $("#marcoConfirmar5").css("z-index", "1"); 
 }

 //Quita la memoria de la pantalla
 function cerrarMemoria(){ 
	  $("#opacidad").fadeTo("fast", 0.0);
	  $(".marcoConfirmar").fadeTo("fast", 0.0);
	  $("#opacidad").css("z-index", "-5");
	  $(".marcoConfirmar").css("z-index", "-4");
	  $(window).scrollTop(0);  
 }
 
 $(document).keyup(function(e) {
	     if (e.keyCode == 27) {
			$("#opacidad").fadeTo("fast", 0.0);
			$(".marcoConfirmar").fadeTo("fast", 0.0);
			$("#opacidad").css("z-index", "-5");
			$(".marcoConfirmar").css("z-index", "-4");
			$(window).scrollTop(0);
	    }
	});



 
