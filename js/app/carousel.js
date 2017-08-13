define(['jquery', 'event'], function($,Event){
	function Carousel($node){
		this.init($node);		
	}

	Carousel.prototype = {
		init:function($node){
			var	$pic = this.$pic = $node.find('.pic'),
			   $pageIndex = this.$pageIndex = $node.find('.page-index'),
	  	       $prev = this.$prev = $node.find('.btn-prev'),
	       	   $next = this.$next = $node.find('.btn-next');
		
			this.piclength = $pic.children().length;
	    	this.imgWidth = $pic.children().width();

	    	this.isAnimation = false;
	    	this.mark = 0;

	    	var $picFirst = $pic.children().first().clone(),
				$picLast = $pic.children().last().clone();			
	    	$pic.append($picFirst);
	    	$pic.prepend($picLast);
	    	$pic.width(this.imgWidth*$pic.children().length);
	    	$pic.css('left', -this.imgWidth);
	    	
	    	this.bind()  
	    	
	    },

		bind: function(){			
			var _this = this;
			this.$prev.on('click', function(){
    			_this.playPrev()
    		})

    		this.$next.on('click', function(){
    			_this.playNext()
    		})
			this.$pageIndex.on('click', 'li', function(e){
				var target = e.target;
				_this.playBullet(target)
				_this.showBullet()
			})

		    
		},
		playNext: function(){	
    		var _this = this
    		if(!this.isAnimation){
    			this.isAnimation = true
	    		this.$pic.animate({
					'left': '-='+_this.$pic.children().width()
				}, function(){
					_this.mark++

					if(_this.mark > _this.piclength-1){
						_this.$pic.css('left', -(_this.$pic.children().width()))
						_this.mark=0
					}
					_this.showBullet()
					_this.isAnimation = false
					Event.fire('play', _this.mark)

				})
    		}else{
    			return
    		}
    	},
		playPrev: function(){
    		var _this = this
    		if(!this.isAnimation){
    			this.isAnimation = true
	    		this.$pic.animate({
	    			'left': '+='+_this.$pic.children().width()
	    		}, function(){
	    			_this.mark--
	    			if(_this.mark < 0){
	    				_this.$pic.css('left', -(_this.$pic.children().width()*_this.piclength))
	    				_this.mark = _this.piclength-1
	    			}
					 _this.showBullet()
					_this.isAnimation = false
					Event.fire('play', _this.mark)
	    		})
	    	}else{
	    		return
	    	} 
    	},
    	showBullet: function(){
    		this.$pageIndex.children().removeClass('active')
    		.eq(this.mark).addClass('active')
    	},

    	playBullet: function(target){
    		this.mark = this.$pageIndex.children().index($(target))
    		this.$pic.animate({'left': -(this.mark+1)*this.$pic.children().width()})
    		Event.fire('play', this.mark)
    	}
}

	return Carousel


})