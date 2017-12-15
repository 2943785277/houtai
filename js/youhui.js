function isempty(num,index){
			var $val=$(".ivu-form-label-right .ivu-input-wrapper").eq(num).find('.ivu-input').val();
			var $sib=$(".ivu-form-label-right .ivu-input-wrapper");
			
			if($val.trim()==""){
				$sib.eq(num).siblings().show();
				index++;
				
				return index;
			}else{
				$sib.eq(num).siblings().hide();
			}
			
		}
$(
	function(){
		
		var perdoninfo=[
		 {
		 	id:1,
		 	username:"杜姣",
		 	urls:"assistant.png",
		 	dengji:2,
		 	zhanghu:"111111",
		 	zhifen:22,
		 	status:"开启",
		 	beizhu:"备注",
		 	time:"2017051112:22:22"
		 },
		 {
		 	id:2,
		 	username:"杜佳乐",
		 	urls:"assistant.png",
		 	dengji:2,
		 	zhanghu:"111111",
		 	zhifen:22,
		 	status:"开启",
		 	beizhu:"备注",
		 	time:"2017051112:22:22"
		 },
		 {
		 	id:3,
		 	username:"王琳莉",
		 	urls:"assistant.png",
		 	dengji:2,
		 	zhanghu:"111111",
		 	zhifen:22,
		 	status:"开启",
		 	beizhu:"备注",
		 	time:"2017051112:22:22"
		 },
		 {
		 	id:4,
		 	username:"李晶",
		 	urls:"assistant.png",
		 	dengji:2,
		 	zhanghu:"111111",
		 	zhifen:22,
		 	status:"开启",
		 	beizhu:"备注",
		 	time:"2017051112:22:22"
		 }
		];
							
		
		$("#addbox").find('.perinfo_item').remove();
		$.each(perdoninfo,function(i,val){ 
			
			var addhtml1='<table border="0" cellspacing="0" cellpadding="0" style="width: 984px;" class="perinfo_item"><tr><td style="width: 40px;"><input type="checkbox" name="" id="" value="" /></td>';
			addhtml1=addhtml1+'<td style="width: 60px;">'+val.id+'</td>';
			addhtml1=addhtml1+'<td style="width: 200px;text-align: left;"><img src="img/'+val.urls+'" alt="" class="perimg" /><p class="pername">'+val.username+'</p></td>'
			addhtml1=addhtml1+'<td style="width: 42px;">'+val.dengji+'</td>';
			addhtml1=addhtml1+'<td style="width: 130px;">'+val.zhanghu+'</td>';
			addhtml1=addhtml1+'<td style="width: 40px;">'+val.zhifen+'</td>';
			addhtml1=addhtml1+'<td style="width: 80px;">'+val.status+'</td>';
			addhtml1=addhtml1+'<td style="width: 140px;">'+val.beizhu+'</td>';
			addhtml1=addhtml1+'<td style="width: 110px;">'+val.time+'</td>';
			addhtml1=addhtml1+'<td style="width: 120px;"><button class="modifybtn open-win ml">编辑</button><button class="openbtn">删除</button></td>';
			addhtml1=addhtml1+'</tr></table>';
			$("#addbox").append(addhtml1);
		});
		
		$(".ivu-form-label-right .ivu-input-wrapper").find('.ivu-input').on("blur",function(){
			var $val=$(this).val();
			if($val.trim()==""){
				$(this).parent().siblings().show();
				return false;
			}else{
				$(this).parent().siblings().hide();
			}
		});
		
		
		$(".showmodel").on("click",function(){
			$(".cover").show();
		});
		$("#sureadd").on("click",function(){
			var $forminput=$(".ivu-form-label-right .ivu-input");
			var index=0;
			var arr=[];
			$forminput.each(function(i,val){
				
				var indexs=isempty(i,index);
				arr.push(indexs);
				
			});
			//console.log(arr);
			if(arr.indexOf(1)!=-1){
				$(".cover").show();
			}else{
				$(".cover").hide();
				$forminput.each(function(i,val){
					$forminput.eq(i).val('');
				});
			}

		});
		$("#canceladd").on("click",function(){
			var $forminput=$(".ivu-form-label-right .ivu-input");
			var $sib=$(".ivu-form-label-right .ivu-input-wrapper");
				$forminput.each(function(i,val){
					$forminput.eq(i).val('');
				});
				$sib.siblings().hide();
			$(".cover").hide();
		});
		$(".tit_listbox li").on("click",function(){
			$(this).addClass('addborder').siblings().removeClass('addborder');
		});
		$(".chaxun").on("click",function(){
			var $cxval=$("#searchinput").val().trim();
			if($cxval==""){
				$(".perinfo_item").show();
				return;
			}
			$(".perinfo_item").hide();
			$(".perinfo_item").each(function(i,val){
				$(this).find(".pername:contains('"+$cxval+"')").parents(".perinfo_item").show();
			});
		});
		
	}
)
