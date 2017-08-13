
define(function(){
	var Event = (function(){
		var eventList = {}
		function on(evt, handler){
			eventList[evt] = eventList[evt] || []
			eventList[evt].push(handler)
		}

		function fire(evt, args){
			if(!eventList[evt]){
				return
			}else{
				for(var i = 0; i < eventList[evt].length; i++){
					eventList[evt][i](Array.prototype.slice.call(arguments, 1));
				}
			}
		}

		return {
			on: on,
			fire: fire
		}
	})()
	return Event
})


