define(['jquery'],function($){

	function Tab($node){
		 this.init($node);
		 this.bind();
	}

	Tab.prototype.init = function($node){
		this.node = $node;
		this.nav = $node.siblings('.nav-more')
	}

	Tab.prototype.bind = function(){
		var _this = this;
		this.node.on('mouseenter','li',function(){
			var index = _this.node.children().index($(this));
			_this.nav.children().eq(index).css('display','block').siblings().hide();
		})

		this.node.parent().on('mouseleave',function(){
			_this.nav.children().hide();
		});
	}

	return Tab;
})