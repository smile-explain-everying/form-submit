// 全部为空时，点击提交按钮提示

$('.submit').on('click', function() {
	if ($('input').val() == "") {
		$('.tip').show();
	}
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
	if (length == 0) {
		telphone.next().hide();
	} else if (length == 11) {
		isPhone(telphone)
	}

})


////////////////////////////////////////////////////////////////////

//邮箱验证
var mailbox = $("input[name='mailbox']");

function isMailboxNo(mail) {
	var pattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return pattern.test(mail);
}

function isMailbox(mailbox) {
	var mail = $.trim(mailbox.val());
	var mail_length = mailbox.val().length;
	if (mail_length == 0) {
		mailbox.next().show();
		mailbox.next().find('span').text('邮箱不能为空')
	} else if (isMailboxNo(mail) == false) {
		mailbox.next().show();
		mailbox.next().find('span').text('请输入正确的邮箱')
	}
}

// 失去焦点色时候判断手机号

mailbox.on('blur', function() {
	isMailbox(mailbox)
})

////////////////////////////////////////////////////////////////////

//密码验证  长度8-16

var password = $("input[name='password']");

function isPassNo(card) {
	var pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
	return pattern.test(card);
}

password.on('blur', function() {
	var pass = password.val()
	var pass_length = password.val().length;
	if (pass_length == 0) {
		password.next().show();
		password.next().find('span').text('密码不能为空')
	} else if (pass_length < 8) {
		password.next().show();
		password.next().find('span').text('密码不能少于八位字符')
	} else if (isPassNo(pass) == false) {
		password.next().show();
		password.next().find('span').text('密码必须为数字、字母的组合')
	}
})

//确认密码判断

var repassword = $("input[name='repassword']");

repassword.on('blur', function() {
	var pre_pass = password.val();
	var now_pass = repassword.val();
	var now_length = repassword.val().length;
	if (now_length == 0) {
		repassword.next().show();
		repassword.next().find('span').text('请再次输入密码')
	} else if (pre_pass != now_pass) {
		repassword.next().show();
		repassword.next().find('span').text('密码不一致')
	}
})

////////////////////////////////////////////////////////////////////


// 验证身份证 

var idcard = $("input[name='idcard']");

function isCardNo(card) {
	var pattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	return pattern.test(card);
}

function isIdcard(idcard) {
	var card = $.trim(idcard.val());
	var card_length = idcard.val().length;
	if (card_length == 0) {
		idcard.next().show();
		idcard.next().find('span').text('身份证不能为空')
	} else if (isCardNo(card) == false) {
		console.log('到这了')
		idcard.next().show();
		idcard.next().find('span').text('请输入正确的身份证号码')
	}
}

idcard.on('blur', function() {
	isIdcard(idcard)
})