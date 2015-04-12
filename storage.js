function click(e){
		var text = document.getElementById('test').value;
		localStorage.setItem('age',text);
		console.log('storage!');
	
}


document.addEventListener('DOMContentLoaded',function(){
	var but = document.getElementById('ok');
	but.addEventListener('click',click);

	document.getElementById('fill').addEventListener('click',function(){
		console.log('fill!'+localStorage.getItem('age'));

	})
});