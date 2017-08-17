// 全部为空时，点击提交按钮提示

$('.tijiao').on('click', function() {
	$('.box').each(function() {

		if ($('input').val() == "") {
			$('.tip').show();
		}
	})
})

// 点击重置按钮，置空所有

$('.reset').on('click', function() {
	$('.box').find('input').val('');
	$('.tip').hide();
})

// input获取焦点的时候，错误提示消失

$('.box').on('focus', 'p input', function() {
	$(this).next().hide()
})

// 当input失去焦点且没有值得时候，错误提示显示

$('.box').on('blur', 'p input', function() {
	var vals = $.trim($(this).val());
	if (vals == '') {
		$(this).next().show()
	}
})

///////////////////////////////////////////////////////////////////////

//手机号判断

var telphone = $("input[name='phone']");

function isPhoneNo(phone) {
	var pattern = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
	return pattern.test(phone);
}

function isPhone(telphone) {
	var phone = $.trim(telphone.val());
	var phone_length = telphone.val().length;
	if (phone_length == 0) {
		telphone.next().show();
		telphone.next().find('span').text('手机号码不能为空')
	} else if (isPhoneNo(phone) == false) {
		telphone.next().show();
		telphone.next().find('span').text('请输入正确的手机号')
	}
}

// 失去焦点色时候判断手机号

telphone.on('blur', function() {
	isPhone(telphone)
})

// 当输入手机号11位时自动判断

telphone.keyup(function() {
	var length = telphone.val().length
	console.log(length)
	if (length == 0) {
		telphone.next().hide();
	} else if (length == 11) {
		isPhone(telphone)
	}

})


////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////

//密码验证


////////////////////////////////////////////////////////////////////


// 验证身份证 
function isCardNo(card) {
	var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return pattern.test(card);
}