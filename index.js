require('avalon-min',function(avalon) {
	var roundabout=avalon.define({
		$id:'roundabout',
		img_list:[],
		cur:5
	});
	avalon.scan();
	for(var i=1;i<7;i++)
		roundabout.img_list.push(i);
});