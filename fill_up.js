var e = document.getElementById("inp-query");
var get_s='hi';
get_s = StorageArea.get('douban',function(){});

e.value = get_s;
