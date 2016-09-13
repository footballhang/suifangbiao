
//发起分诊页面
// $(".zhusu_list>li").click(function(){
// 	$(this).addClass('active_bg');
// 	$(this).siblings().removeClass('active_bg');
// 	$(this).siblings().find("span").css("display","none");
// 	$(this).find("span").css("display","block");
// })

$(document).on("click",".zhusu_list>li",function(){
	$(this).addClass('active_bg');
	$(this).siblings().removeClass('active_bg');
	$(this).siblings().find("span").css("display","none");
	$(this).find("span").css("display","block");
})
//zhezhao
$(".cancel_btn").click(function(){
	$(".zhezhao").css("display","block");
})

$(".btn_cancel1").click(function(){
	$(".zhezhao").css("display","none");
})

$(".input_box>input,.input_box_tr>input").focus(function(){
	if($(this).val()=="请输入健康一卡通或居民身份证号码"){
		$(this).val("");
		$(this).css("color","#666");
	}
});
$(".input_box>input,.input_box_tr>input").blur(function(){
	if($(this).val()==""){
		$(this).val("请输入健康一卡通或居民身份证号码");
		$(this).css("color","#ccc");
	}
});

$(".input_div2").focus(function(){
	if($(this).val()=="请输入辅助症状"){
		$(this).val("");
		$(this).css("color","#666");

	}
});
$(".input_div2").blur(function(){
	if($(this).val()==""){
		$(this).val("请输入辅助症状");
		$(this).css("color","#ccc");
	}
});
$(".input_div3").focus(function(){
	if($(this).val()=="请输入合并症／并发症"){
		$(this).val("");
		$(this).css("color","#666");

	}
});
$(".input_div3").blur(function(){
	if($(this).val()==""){
		$(this).val("请输入合并症／并发症");
		$(this).css("color","#ccc");
	}
});

$(".tr_fenzhen_advice>input").focus(function(){
	if($(this).val()=="请选择分诊建议"){
		$(this).val("");
		$(this).css("color","#666");

	}
});
$(".tr_fenzhen_advice>input").blur(function(){
	if($(this).val()==""){
		$(this).val("请选择分诊建议");
		$(this).css("color","#ccc");
	}
});

$(".tR_record_serach>input").focus(function(){
	if($(this).val()=="请输入患者姓名或疑似诊断"){
		$(this).val("");
		$(this).css("color","#666");
	}
});
$(".tR_record_serach>input").blur(function(){
	if($(this).val()==""){
		$(this).val("请输入患者姓名或疑似诊断");
		$(this).css("color","#ccc");
	}
});

$(".patient_serach>input").focus(function(){
	if($(this).val()=="请输入患者姓名"){
		$(this).val("");
		$(this).css("color","#666");
	}
});
$(".patient_serach>input").blur(function(){
	if($(this).val()==""){
		$(this).val("请输入患者姓名");
		$(this).css("color","#ccc");
	}
});

$(".tr_yisi_serach input").focus(function(){
	if($(this).val()=="请输入疾病名称"){
		$(this).val("");
		$(this).css("color","#666");
	}
});
$(".tr_yisi_serach input").blur(function(){
	if($(this).val()==""){
		$(this).val("请输入疾病名称");
		$(this).css("color","#ccc");
	}
});



$(".recommend>a i").click(function(){
	var $a = $(".recommend>a").html();
	console.log($a)
	$(this).parent("a").siblings('div').children('textarea').html($a);
});
/*增加丢失的reg散页的js*/
$('.reg_check_btns').click(function(){
	$('.reg_tiaokuan_con').css('border','none');
});
function heightSet(elem){
	var height=$(window).height();
	height=height-95;
	if(height>elem.height()){
		elem.css('height',height+'px');
	}
}
/*统计列表效果*/
$('.main_wait table,.family_table_left table,.family_health_table,.family_files_table').find('tr').mouseover(function(){
	if($(this).hasClass('main_table_header')){

	}else{
		$(this).css('background','#bff3e8');
	}
})
$('.main_wait table,.family_table_left table,.family_health_table,.family_files_table').find('tr').mouseout(function(){
	if($(this).hasClass('main_table_header')){

	}else{
		if($(this).hasClass('main_tableTd_color')){
			$(this).css('background','#ebfbf8');
		}else{
			$(this).css('background','white');
		}

	}
});
/*取消分诊&&下一步按钮*/
$('.tR_cH_tuijian_bottom_cbtns a').eq(0).mouseover(function(){
		$(this).css('color','#cc0000');
	})
		$('.tR_cH_tuijian_bottom_cbtns a').eq(0).mouseout(function(){
		$(this).css('color','#ccc');
	});
$(".patient_serve_table1 tbody tr").mouseover(function(){
	$(this).css("background","#bff3e8");
})
$(".patient_serve_table1 tbody tr").mouseout(function(){
	if($(this).hasClass('main_tableTd_color')){
			$(this).css('background','#ebfbf8');
		}else{
			$(this).css('background','white');
		}
})

//发起分诊选择
$(".tr_yisi_listBox_zz>p>a").click(function(){
	if($(".complete_box_zz").val()=="请选择或输入主症"){
		$(".complete_box_zz").val("");

		$(".complete_box_zz").css({"color":"#666","text-align":"left","line-height":"24px"});
	}

	$(".complete_box_zz").append($(".tr_yisi_listBox_zz>p>a").eq($(this).index()).html()+"  ");

})
$(".tr_yisi_listBox_tz>p>a").click(function(){
	if($(".complete_box_tz").val()=="请选择或输入体征"){
		$(".complete_box_tz").val("");

		$(".complete_box_tz").css({"color":"#666","text-align":"left","line-height":"24px"});
	}
	$(".complete_box_tz").append($(".tr_yisi_listBox_tz>p>a").eq($(this).index()).html()+ "  ");
})
$(".tr_yisi_listBox_li>h5>i").click(function(){
	if($(".complete_box_ys").val()=="请选择或输入疑似诊断"){
		$(".complete_box_ys").val("");

		$(".complete_box_ys").css({"color":"#666","text-align":"left","line-height":"24px"});
	}
	$(this).addClass("yisi_choose_ok").parent().parent().siblings('li').children('h5').children('i').removeClass('yisi_choose_ok');

		$(".complete_box_ys").addClass('none');
		$(".init_yisi_desr").removeClass('none');

		var $a = $(".tr_yisi_listBox_li>h5").eq($(this).index()).text();
		$(".init_yisi_desr").html('<a class="desr">'+$a+'<i class="btn_cancel default2"></i></a>');
})

$(document).on("click",".desr>i",function(){
	$(this).parent().remove();
	$(".init_yisi_desr").addClass('none');
	$(".complete_box_ys").removeClass('none');
})

/*站内信*/
//input[checkbox]
// $(".table_head_check>input").click(function(){
// 	if(this.checked){
// 		$(".table_message_checkbox>input").attr("checked",true);
// 	}else if($(this).checked!=true){
// 		$(".table_message_checkbox>input").attr("checked",false);
// 	}
// })

// $(".table_message_content>p").click(function(){
// 	$(this).siblings('i').addClass('icon_mes_read');
// })

// $(".message_readMes").click(function(){
// 	$(".table_message_content>i").addClass('icon_mes_read');
	
// })

// $(".message_table_content tr").each(function(index){
// 	if($(".message_table_content tr").eq(index).children('input').is(":checked")){
// 		console.log(index)
// 		$(".message_delete").click(function(){
			
// 			$(".message_table_content tr").eq(index).remove();
// 		})
// 	}
// })



var oLeft=0;
$('.info_elem_left').each(function(index){
	oLeft=$(this).width();
	$(this).css('left',-(oLeft+22)+'px');
});
/*证书资料认证模块*/
$('.pC_cA_tabRight').click(function(){
		$(this).addClass('pC_cA_tabActive');
		$('.pC_cA_tabLeft').removeClass('pC_cA_tabActive');
		$('.pC_cA_tabhushi').removeClass('pC_cA_tabActive');
		$('.cA_xianji_doc').addClass('none');
		$('.cA_jiceng_doc').removeClass('none');
		$('.cA_hushi_doc').addClass('none');
		$('.info_elem_left').each(function(index){
			oLeft=$(this).width();
			$(this).css('left',-(oLeft+22)+'px');
		})
	});

	$('.pC_cA_tabLeft').click(function(){
		$(this).addClass('pC_cA_tabActive');
		$('.pC_cA_tabRight').removeClass('pC_cA_tabActive');
		$('.pC_cA_tabhushi').removeClass('pC_cA_tabActive');
		$('.cA_xianji_doc').removeClass('none');
		$('.cA_jiceng_doc').addClass('none');
		$('.cA_hushi_doc').addClass('none');
		$('.info_elem_left').each(function(index){
			oLeft=$(this).width();
			$(this).css('left',-(oLeft+22)+'px');
		})
	});
	
	$('.pC_cA_tabhushi').click(function(){
		$(this).addClass('pC_cA_tabActive');
		$('.pC_cA_tabRight').removeClass('pC_cA_tabActive');
		$('.pC_cA_tabLeft').removeClass('pC_cA_tabActive');
		$('.cA_hushi_doc').removeClass('none');
		$('.cA_jiceng_doc').addClass('none');
		$('.cA_xianji_doc').addClass('none');
		$('.info_elem_left').each(function(index){
			oLeft=$(this).width();
			$(this).css('left',-(oLeft+22)+'px');
		})
	});

$('.cA_zhiyezhengshu').find('input').focus(function(){
	if($(this).val()=='请输入资格证编号'){
		$(this).val("");
		$(this).css('color','#666');
	}
});
$('.cA_zhiyezhengshu').find('input').blur(function(){
	if($(this).val()==''){
		$(this).val("请输入资格证编号");
		$(this).css('color','#ccc');
	}
});
$('.cA_zhichengzhengshu').find('input').focus(function(){
	if($(this).val()=='请输入证书编号'){
		$(this).val("");
		$(this).css('color','#666');
	}
});
$('.cA_zhichengzhengshu').find('input').blur(function(){
	if($(this).val()==''){
		$(this).val("请输入证书编号");
		$(this).css('color','#ccc');
	}
});
$('.cA_zigezhengSelect_con').find('select').click(function(){
//	if($(this).val()=='请选择资格证类型'){}
			$(this).css('color','#666');
});

/*左侧菜单的控制*/
var storage = window.localStorage;
/*证书上传-函数*/
var iMaxFilesize = 1048576; 
function filePicture(img,imgClass) {
    var oFile = document.getElementById(img).files[0];
    var rFilter = /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i;
    if (! rFilter.test(oFile.type)) {   
    	alert('上传文件非图片格式');
        return;
    }
    if (oFile.size > iMaxFilesize) {
    	alert('上传文件过大');
        return;
    }
    var oReader = new FileReader();
        oReader.onload = function(e){
      	$(imgClass).parent().find('img').attr('src',e.target.result);
    };
    oReader.readAsDataURL(oFile);
};

/*完成分转诊单*/
$(".complete_textarea").focus(function(){
	if($(this).val()=="请在这里输入您的转诊建议"){
		$(this).val("");
		$(this).css({"color":"#666","text-align":"left","line-height":"24px"});
	}
});
$(".complete_textarea").blur(function(){
	if($(this).val()==""){
		$(this).val("请在这里输入您的转诊建议");
		$(this).css({"color":"#ccc","text-align":"center","line-height":"100px"});	
	}
});

$(".complete_textarea1").focus(function(){
	if($(this).val()=="请在这里输入您的接诊建议"){
		$(this).val("");
		$(this).css({"color":"#666","text-align":"left","line-height":"24px"});
	}
});
$(".complete_textarea1").blur(function(){
	if($(this).val()==""){
		$(this).val("请在这里输入您的接诊建议");
		$(this).css({"color":"#ccc","text-align":"center","line-height":"100px"});	
	}
})

$("#loadimg").change(function(){
		filePicture('loadimg','#loadimg');
	})

/*头像上传*/

/*---站内信通知---*/
$(".message_delete").mouseover(function(){
	$(this).addClass('message_delete_p');
	$(this).children('span').css("color","#fff");
})
$(".message_delete").mouseout(function(){
	$(this).removeClass('message_delete_p');
	$(this).children('span').css("color","");
})









