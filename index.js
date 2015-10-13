require('avalon-min',function(avalon) {
	var animate_class='to-right1 to-right2 to-right3 to-right4 to-left1 to-left2 to-left3 to-left4 jump-prev jump-middle jump-next';
	var roundabout=avalon.define({
		$id:'roundabout',
		img_list:[],
		cur:0,
		jump:function(i,dir){
			if(dir==1){//向右滚 cur-1
				avalon($('img'+prev(i))).removeClass(animate_class).addClass('to-right1');
				avalon($('img'+i)).removeClass(animate_class).addClass('to-right2');
				avalon($('img'+next(i))).removeClass(animate_class).addClass('to-right3');
				avalon($('img'+next(next(i)))).removeClass(animate_class).addClass('to-right4');
			}else{//向左滚 cur+1
				avalon($('img'+next(i))).removeClass(animate_class).addClass('to-left1');
				avalon($('img'+i)).removeClass(animate_class).addClass('to-left2');
				avalon($('img'+prev(i))).removeClass(animate_class).addClass('to-left3');
				avalon($('img'+prev(prev(i)))).removeClass(animate_class).addClass('to-left4');
			}
			roundabout.cur=i;
		},
		spec_jump:function(i){
			roundabout.cur=i;
			avalon($('img'+prev(i))).removeClass(animate_class).addClass('jump-prev');
			avalon($('img'+i)).removeClass(animate_class).addClass('jump-middle');
			avalon($('img'+next(i))).removeClass(animate_class).addClass('jump-next');
		}
	});
	function prev(now){
		return now==0?roundabout.img_list.size()-1:now-1;
	}
	function next(now){
		return now==roundabout.img_list.size()-1?0:now+1;
	}
	avalon.scan();
	for(var i=1;i<7;i++)
		roundabout.img_list.push(i);
});