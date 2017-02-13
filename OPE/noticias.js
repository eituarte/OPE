$(document).ready(function(){
		
		$("#panel1").fadeTo("fast", 1.0);
		
		var width = 910;
		var speed = 1000;
		var cont = 1;
		
		var $slider = $("#slider");
		var $slideContainer = $slider.find(".slides");
		var $slides = $slideContainer.find(".slide");
		var $opacity = $slides.find(".slideOpacity");
		var $texto = $slides.find(".texto");
		var interval;
		
		function startSlider(){
			$opacity.fadeTo("fast", "0.0");
			$(".texto").css("display", "none");
			interval = setInterval(function(){
			$slideContainer.animate({"margin-left": "-="+ width}, speed, function(){
					cont++;
					
					if(cont === $slides.length){
						cont = 1;
						$slideContainer.css("margin-left", 0);
					}
			});
			}, 4000);
		}
		
		function pauseSlider(){
			clearInterval(interval);
			$opacity.fadeTo("fast", "0.5");
		}
		
		$slider.on("mouseenter", pauseSlider).on("mouseleave", startSlider);
		
		startSlider();
		
});

function mostrarResumen(i){
	$("#texto" + i).css("opacity", "1.0");
			$("#texto" + i).fadeTo("fast", "1.0");
			$("#texto" + i).show();
}

function ocultarResumen(i){
	
}
