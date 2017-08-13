

define(['jquery','event','tab','carousel','carousel-show'],function($,Event,Tab,Carousel,Carousel2){

	new Tab($('.menue'));
	new Carousel($('.carousel'));
	new Carousel2($('.flash-show'));
		var color = ['#d7e2f1', '#fedfe3', '#fae6d6', '#e8e6a0', '#f5c9ca'];
	
	Event.on('play',function(data){
		console.log(color[data]);
		$('#grounding').css('background-color',color[data]);
	});	
		

	
})