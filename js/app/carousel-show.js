define(['jquery'],function($){
	function Carousel2($node){	 
	 	this.init($node);
	 	this.bind();
	 	var self = this;
	 	setInterval(function(){self.play()},2500);

	}
	Carousel2.prototype.init = function($node){
		this.$flashShow = $node.find('.img-ct');
		this.$imgList = this.$flashShow.children();	
		this.$imgLength  = this.$imgList.length;
		this.$bullet = $node.find('.bullet');
		this.make = 0;
		this.$imgList.eq(0).css('opacity','1').siblings().css('opacity','0');
	}
	Carousel2.prototype.play = function(){
		var self = this;
		console.log(this.make);	
		if (this.make < this.$imgLength-1) {
			self.make++;		
			self.$imgList.eq(self.make).css({
				'display':'block'
			}).animate({				
				'opacity':1
			}).siblings().css({
				'display':'none',
				'opacity':0
			});			
		}else if(this.make === this.$imgLength-1){
			self.make = 0;		
			self.$imgList.eq(self.make).css({
				'display':'block'
			}).animate({				
				'opacity':1
			}).siblings().css({
				'display':'none',
				'opacity':0
			});
		}
		this.bulletShow();  

	}
	Carousel2.prototype.bulletShow = function(){
		this.$bullet.children().eq(this.make).addClass('active').siblings().removeClass('active');
	}
	Carousel2.prototype.bind = function(){
		var self = this;
		this.$bullet.on('click','li',function(){
			self.make = self.$bullet.children().index( $(this) ) - 1;
			console.log(self.make);
			self.play();
		});
	}
	return Carousel2;
});