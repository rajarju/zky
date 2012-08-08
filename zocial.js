var frame = document.querySelector('iframe');

frame.onerror = function(){
	console.log('ERROR');
}

frame.onload = function(e){
	console.log(e);
	frame.className = 'loaded';
}	