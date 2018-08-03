$(function() {

	//l'array ARR va contenir la liste des images
	var arr = [];
	//trop lazy pour tout taper... 
	for (var x=1; x<= 36; x++)
		arr.push("360/img_mias/prueba_" +x + ".png");
	var arr2 = []
	for (var x=1; x<= 36; x++)
		arr2.push(x + ".png");
	
	//bindons le widget rotate � l'image pic avec la liste d'image arr
	$("#mousemove").threesixty({images:arr, method:'mousemove', 'cycle':3, direction:"backward"});
	$("#click").threesixty({images:arr, method:'click', 'cycle':1, 'resetMargin': 10});
	$("#auto").threesixty({images:arr, method:'auto', autoscrollspeed:100});

});
