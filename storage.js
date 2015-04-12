function click(e){
	var t = document.getElementById('test').value;
	 chrome.storage.local.set({'douban':t},function(){
	 	console.log('storage!');
	 });
}

function fill_up(e){
	var e = document.getElementById("inp-query");
var get_s='hi';
get_s = StorageArea.get('douban',function(){});

e.value = get_s;
}

document.addEventListener('DOMContentLoaded',function(){
	var but = document.getElementById('ok');
	but.addEventListener('click',click);
	var fill = document.getElementById('fill');
	fill.addEventListener('fill',fill_up);
});