$(document).ready(function(){
		//$(".submenu").fadeTo("slow", 1.0);
		$("#panel1").fadeTo("slow", 1.0);
		$(".panelNoticias").fadeTo("slow", 1.0);
		//$("#sub1").css("background-color", "e77777");
});
var ultima = 1;
function cambiarSubseccion(i){
	$(window).scrollTop(0);
	//$("#sub"+ultima).css("background-color", "b71234");
	//$("#sub"+i).css("background-color", "e77777");
	$("#panel"+ultima).hide();
	$("#panel"+i).fadeTo("slow", 1.0);
	$(".submenu").hide();
	ultima = i;
}

function mostrarSubMenu(){
	$(".submenu").fadeTo("slow", 1.0);
}

function ocultarSubMenu(){
	$(".submenu").hide();
}