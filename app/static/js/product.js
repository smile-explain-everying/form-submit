$(document).ready(function(){
	// tab页切换
   $(".tab_content").hide().eq(0).show();
    $(".navtab a").click(function(){
    	
        var index = $(this).parent("li").index();
        $(this).addClass('active').parent("li").siblings().find("a").removeClass('active');

        $(".tab_content").hide().eq(index).show();
        setTimeout(function(){
        	window.location.reload();
        },1000)
        
    });

	// 点击出现弹出层
	$(".cash_btn").click(function(){
         $("#fixed_modal").show();
         $(".Cash_div_Show").show(100);
	});
	$(".slider .spic a").click(function(){
         $("#fixed_modal").show();
         $("#fixed_modal").click(function(){
         	$(this).hide();
         });
	});

    // 选择文件显示文件名
    $(".file").on("change","input[type='file']",function(){

        $(".showFileName1").show();
        var filePath=$(this).val();
        if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
            $(".fileerrorTip1").html("").hide();
            var arr=filePath.split('\\');
            var fileName=arr[arr.length-1];
            $(".showFileName1").html(fileName);
        }else{
            $(".showFileName1").html("");
            $(".showFileName1").hide();
            $(".fileerrorTip1").html("您未上传文件，或者您上传文件类型有误！").show();
            return false
        }
    });

});