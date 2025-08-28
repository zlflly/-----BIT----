function getInfo(){
	let account=document.getElementById('login-username').value;
	let password=document.getElementById('login-password').value;
	return [account,password];
}

function setHint(text){
	let hint=document.getElementById('login-hint');
	hint.textContent=text;
}

function login(){
	const [acc,pass]=getInfo();
	if(!acc||!pass){
		setHint('请填写账号及密码!');
		return;
	}
	if(!localStorage.getItem('BITeli-'+acc)){
		setHint('用户不存在!');
		return;
	}
	if(localStorage.getItem('BITeli-'+acc)!=pass){
		setHint('账号与密码不匹配!');
		return;
	}
	localStorage.setItem('BITeli-username',acc);
	window.location.href='../index.html';
}

function register(){
	const [acc,pass]=getInfo();
	if(!acc||!pass){
		setHint('请填写账号及密码!');
		return;
	}
	if(localStorage.getItem('BITeli-'+acc)){
		setHint('用户名已存在!');
		return;
	}
	localStorage.setItem('BITeli-username',acc);
	localStorage.setItem('BITeli-'+acc,pass);
	window.location.href='../index.html';
}