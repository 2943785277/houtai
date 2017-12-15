//$(".mr_frbox").slide({
//		//alert('0')
//		titCell: "",
//		mainCell: ".mr_frUl1 ul",
//		autoPage: true,
//		effect: "fold",
//		autoPlay: true,
//		vis: 1
//	});
$(document).ready(function(){
	//获取 content 区域的  高度 
	var Hcontent = $(".content").height()    //获取高度 +20px 
	//alert(Hcontent)
	$(".c .c-l").height(Hcontent+ 20 +'px')
})




//显示隐藏元素
function Show(obj,objs){   							//1.标签     2.需要隐藏的标签   
		$(obj).hover(function(){
			//var indexs = $(obj).index($(this)) 	 //获取节点的index
			$($(this)).find(objs).stop().fadeIn()
			
		},function(){
			$($(this)).find(objs).stop().fadeOut()
		})
	}
	//Show('.jingshen .jsd .left ul li','p')
	
//	
function tabs(obj,objs,i){
	var indexs,bj,spanbj;
	var arr = ['#10a4c2','#c27010','#c2bc10','#7d10c2','#c2104b','#1075c2']
	$(obj).hover(function(){
		indexs = $(obj).index($(this));
		bj = $(obj).eq(indexs).css('background-color')
		spanbj = $(obj).eq(indexs).find('span').css('color')
		//$(".div").html(bj+'------'+indexs+'-------'+spanbj)
		//移入时对应的样式
		$(obj).css('background','')
		$(obj).find('i').css('background-position',"top")
		$(obj).eq(indexs).css({background:bj,color:"#fff"}).find('i').css('background-position',"bottom")
		
		//  循环整个元素 分别给元素添加对应的 color
		for (var i = 0; i < arr.length; i++) {
			$(obj).eq(i).find('span').css('color',arr[i])
		}
		$(obj).eq(indexs).find('span').css('color','#fff')
		
		//alert(arr[indexs])
	},function(){
		for (var i = 0; i < arr.length; i++) {
			$(obj).eq(i).find('span').css('color',arr[i])
		}
		$(obj).eq(indexs).find('span').css('color','#fff')
	})
}


//标签切换
	function tab(obj,objs,i){   				//1.标签     2.需要隐藏的标签    3.节点值
		var  bj;
		var indexs;
		$(obj).hover(function(){
			indexs = $(obj).index($(this))  //获取节点的index
			bj = $(obj).eq(indexs).css('background-color')
			$(objs).hide()
			$(objs).eq(indexs).show()
			if (i == 0) {
				$(obj).removeClass('act')
				$(obj).eq(indexs).addClass('act')
			}
		})
	}

	//下拉框模拟
	function select(v,e,i){
		//$(v).unbind('click').bind('click',function(){
		$(document).on("click", v, function(){ 
		//$(v).unbind('click').bind('click',function(){
			var index = $(this).index()
			var txt = $(v).eq(index).text()
			$(e).text(txt)
			
			if (i == 1) {
				Ajaxs(txt)
				
			}
		})
	}
	//下拉框模拟
	function drop_down(o,j,v,e,i){
		if ($(j).length == 0) {
			//alert('=0')
			return false
		} else{
			$(o).click(function(){
				var txt = $(this).text()
				select(v,e,i)
				$(j).stop().fadeToggle()
			})
			
		}
		
	}
	
	
	//页面中有一个 可以给类 bor4   2个以上+1
	drop_down(".bor4 span",".bor4 ul",".bor4 ul li",".bor4 span")
	drop_down(".bor5 span",".bor5 ul",".bor5 ul li",".bor5 span")
	drop_down(".bor6 span",".bor6 ul",".bor6 ul li",".bor6 span",0)
	drop_down(".bor7 span",".bor7 ul",".bor7 ul li",".bor7 span",0)
	drop_down(".bor8 span",".bor8 ul",".bor8 ul li",".bor8 span")

	function Tabcss(obj){
		$(obj).click(function(){
			$(obj).removeClass('act')
			$(this).addClass('act')
		})
	}
	
	Tabcss('.c .c-l ul li')
	Tabcss('.c .c-r .label-3 .tabbtns div')
	
	//判断鼠标点击的区域
	$(document).mouseup(function(e){
		if($(e.target).parent(".h-name .assistant .img").length==0){     
			$(".h-name .b-div").hide();
			select()
			$(".bor ul").stop().fadeOut()
		}
	})
	
	//显示隐藏
	function xy (o,j) {   						// 1.点击元素  2.隐藏元素
		$(o).click(function(){
//			$(j).fadeIn(1000).animate({top:'-=10px'},1000)
//			$(this).parent().next().show()					// 变换display 值	
			$(j).fadeOut()
			$(this).parent().next().fadeIn()
		})
	}	
	xy('.h-name .assistant .img img','.h-name .b-div')


	
	//返回顶部按钮
	 $(window).scroll(function(){
	 	var sc=$(window).scrollTop();
	 	if (sc>500) {
	 		$("#toup").fadeIn()
	 	} else{
	 		$("#toup").fadeOut()
	 	}
	 })
	$("#toup").click(function(){
		 var sc=$(window).scrollTop();
		 $('body,html').animate({scrollTop:0},500);
	})
	
	
	//侧边栏
	$("#sidebar ul li").hover(function(){
		//$(this).index()
		var j = $(this).index()
		//alert(j)
		$("#sidebar ul li").eq(j).find('.sid').stop().fadeIn()
	},function(){
		var j = $(this).index()
		$("#sidebar ul li").eq(j).find('.sid').stop().fadeOut()
	})
	
	$("#sidebar ul li").eq(0).click(function(){
		$("#wrap").fadeIn()
	})
	
	//窗口
	$(".open-win").click(function(){
		$("#wrap").fadeIn()
		$("#wraps").fadeIn()
	})
	$(".close-win").click(function(){
		$("#wrap").fadeOut()
		$("#wraps").fadeOut()
	})
	
	
	// 列表
	$(".c .c-l .list div1").click(function(){
		var arr = $(this).parent().index()   				//取索引值
		//var Hieht = $(this).parent().find('ul').height()	//取当前
		var Length = $(this).parent().find('ul li').length	//取当前ul li的数量
		$(".c .c-l .list ul").stop().animate({height:'0px'},100);
		//alert(Length)
//		//$(".c .c-l ul li").css('display','none')
//		//$(this).parent().find('ul').fadeIn()
		$(".c .c-l .list ul").eq(arr).stop().animate({height:Length*50},500)
		//$(this).parent().find('ul').stop().animate({height:Length*50},1000)
//		//$(".c .c-l ul").css('height','0px')
//		$(".c .c-l .list ul").stop().hide()
//		$(this).parent().find('ul').stop().show()
		if ($(".c .c-l .list ul").eq(arr).height()>10){
			$(".c .c-l .list ul").stop().animate({height:'0px'},100);
		}
	})
	
	var as = $(".c .c-l .list div i").length
	for (var i = 0; i < as; i++) {
		//alert(i)
		$(".c .c-l .list div i").eq(i).css({'background-image':'url(img/img'+i+'.png)'})
		//.css("background',"url("../img/img1.png")")
	}
	
	
	//alert(as)
	
	//全选按钮
	function Select(o,j){
		$(o).click(function(){
			var arr = $(o).is(':checked')
			(arr)?$(j).prop('checked',true):$(j).prop('checked',false)
			
			
			if (arr == true) {
				$(j).prop('checked',true)
			} else{
				$(j).prop('checked',false)
			}
		})
	}
	Select("table th input[type='checkbox']","table td input[type='checkbox']")
	
	
	
	
	
	//轮播
	
	var a = 0
	function zidong(obj,objs,index){
		a++;
		if (a >= 3) {
			a=0
		}
		$(objs).attr('class','')
		$(objs).eq(a).addClass('act')
		$(obj).eq(a).fadeIn(300).siblings('a').fadeOut(300);
	}
	
	var a1 = 0
	function zidong1(obj,objs,index){	
		a1++;
		if (a1 >= 3) {
			a1=0
		}
		$(objs).attr('class','')
		$(objs).eq(a1).addClass('act')
		$(obj).eq(a1).fadeIn(300).siblings('a').fadeOut(300);
	}
	
	
	function slide(obj,objs,index){						 //1.轮播图     2.按钮    3.节点值
		$(objs).hover(function(){
			clearInterval(t)
			clearInterval(t1)
			var indexs = $(objs).index($(this))
			a = indexs  
			//a1 = indexs//当前的 this位置 赋值给a
			//$(obj).stop().fadeOut()
			$(objs).attr('class','')
			$(objs).eq(indexs).addClass('act')
			$(obj).eq(indexs).fadeIn(1000).siblings('a').hide();
			//alert(indexs)
		},function(){
			t = setInterval(function(){zidong('.banner a','.banner .btn li')},4000)
			t1 = setInterval(function(){zidong1('.left-slide a','.left-slide .btn li')},4000)
		})
	}
	
	// banner 轮播
	//slide('.banner a','.banner .btn li')
	
	//slide('.left-slide a','.left-slide .btn li')
	var t = setInterval(function(){zidong('.banner a','.banner .btn li')},4000)
	var t1 = setInterval(function(){zidong1('.left-slide a','.left-slide .btn li')},4000)
		
//	var divleft = $(".jt .slide .tab").position().left
//	//alert(divleft)
//	function left(obj,objs,left,speed){
//		$(obj).click(function(){
//			$(objs).animate({left:left-=left},speed)
//		})
//	}
	//left('.jt .slide i','.jt .slide .tab','350',500)
	
//	o:鼠标移入元素
//	obj:ul动画效果元素
//	objs:ul li 
//	left:左边
//	right:右边
//	Vis:li的个数
	function Slide(o,obj,objli,left,right,Vis){
		var s = 0				 				//初始化元素的位置
		var Left = 1							//1 开始向左移动     2向右
		var vis = Vis-1							//li的个数-1就是最大移动的距离
		var Width = $(objli).width()
		function ss(o){
			if (o = 0) {
				s = s+Width
					if (s = 0){
					s=-Width*vis
				}
			} else{
				s = s-Width
					if (s < -Width*vis){
					s=0
				}
			}
		}
		$(left).click(function(){
			Left = 0
			ss(Left)
		})
		$(right).click(function(){
			Left = 1
			ss(Left)
		})
		//动画函数
		function showTime(){
			ss(Left)
			$(obj).animate({left:s+'px'},500)
		}
		var t = setInterval(showTime,3000)
		$(o).hover(function(){
			clearInterval(t)
		},function(){
			t = setInterval(showTime,3000)
		})
	}
	//Slide('.jingshen .jsc .yishi',".jingshen .jsc .yishi .ul",".jingshen .jsc .yishi .ul li",".jingshen .jsc .left-i",".jingshen .jsc .right-i",2)
	
	


/**
 * lc_switch.js
 * Version: 1.0
 * Author: LCweb - Luca Montanari
 * Download: http://www.mycodes.net
 * Licensed under the MIT license
 */
// ===========================================仿IOS 开关

(function($){
	if(typeof($.fn.lc_switch) != 'undefined') {return false;} // prevent dmultiple scripts inits
	
	$.fn.lc_switch = function(on_text, off_text) {

		// destruct
		$.fn.lcs_destroy = function() {
			
			$(this).each(function() {
                var $wrap = $(this).parents('.lcs_wrap');
				
				$wrap.children().not('input').remove();
				$(this).unwrap();
            });
			
			return true;
		};	

		
		// set to ON
		$.fn.lcs_on = function() {
			
			$(this).each(function() {
                var $wrap = $(this).parents('.lcs_wrap');
				var $input = $wrap.find('input');
				
				if(typeof($.fn.prop) == 'function') {
					$wrap.find('input').prop('checked', true);
				} else {
					$wrap.find('input').attr('checked', true);
				}
				
				$wrap.find('input').trigger('lcs-on');
				$wrap.find('input').trigger('lcs-statuschange');
				$wrap.find('.lcs_switch').removeClass('lcs_off').addClass('lcs_on');
				
				// if radio - disable other ones 
				if( $wrap.find('.lcs_switch').hasClass('lcs_radio_switch') ) {
					var f_name = $input.attr('name');
					$wrap.parents('form').find('input[name='+f_name+']').not($input).lcs_off();	
				}
            });
			
			return true;
		};	
		
		
		// set to OFF
		$.fn.lcs_off = function() {
			
			$(this).each(function() {
                var $wrap = $(this).parents('.lcs_wrap');

				if(typeof($.fn.prop) == 'function') {
					$wrap.find('input').prop('checked', false);
				} else {
					$wrap.find('input').attr('checked', false);
				}
				
				$wrap.find('input').trigger('lcs-off');
				$wrap.find('input').trigger('lcs-statuschange');
				$wrap.find('.lcs_switch').removeClass('lcs_on').addClass('lcs_off');
            });
			
			return true;
		};	
		
		
		// construct
		return this.each(function(){
			
			// check against double init
			if( !$(this).parent().hasClass('lcs_wrap') ) {
			
				// default texts
				var ckd_on_txt = (typeof(on_text) == 'undefined') ? '是' : on_text;
				var ckd_off_txt = (typeof(off_text) == 'undefined') ? '否' : off_text;
			   	
			   // labels structure
				var on_label = (ckd_on_txt) ? '<div class="lcs_label lcs_label_on">'+ ckd_on_txt +'</div>' : '';
				var off_label = (ckd_off_txt) ? '<div class="lcs_label lcs_label_off">'+ ckd_off_txt +'</div>' : '';
				
				
				// default states
				var disabled 	= ($(this).is(':disabled')) ? true: false;
				var active 		= ($(this).is(':checked')) ? true : false;
				
				var status_classes = '';
				status_classes += (active) ? ' lcs_on' : ' lcs_off'; 
				if(disabled) {status_classes += ' lcs_disabled';} 
			   
			   
				// wrap and append
				var structure = 
				'<div class="lcs_switch '+status_classes+'">' +
					'<div class="lcs_cursor"></div>' +
					on_label + off_label +
				'</div>';
			   
				if( $(this).is(':input') && ($(this).attr('type') == 'checkbox') ) {
					
					$(this).wrap('<div class="lcs_wrap"></div>');
					$(this).parent().append(structure);
					
					$(this).parent().find('.lcs_switch').addClass('lcs_'+ $(this).attr('type') +'_switch');
				}
			}
        });
	};	
	
	
	
	// handlers
	$(document).ready(function() {
		
		// on click
		$(document).delegate('.lcs_switch:not(.lcs_disabled)', 'click tap', function(e) {

			if( $(this).hasClass('lcs_on') ) {
				if( !$(this).hasClass('lcs_radio_switch') ) { // not for radio
					$(this).lcs_off();
				}
			} else {
				$(this).lcs_on();	
			}
		});
		
		
		// on checkbox status change
		$(document).delegate('.lcs_wrap input', 'change', function() {

			if( $(this).is(':checked') ) {
				$(this).lcs_on();
			} else {
				$(this).lcs_off();	
			}	
		});
		
	});
	
})(jQuery);



function Ajaxss(obj){
		var	are = '';
		if ($("#sel").html() == '请选择') {
			alert('请选择分类')
			return false;
		}else{
			$.ajax({
				type:"get",
				url:"data/select.json",
				data: obj,
				dataType: "json",
				success: function(data){
					for (var i = 0; i < data.datas.length; i++){
						are += "<li>"+data.datas[i].name+"</li>"
						//return are
					}
					$(".bor7 ul").html('')
					$(".bor7 ul").append(are)
				},
				error:function(){
					alert('失败')
				}
			});
		}
		return false;
	}




