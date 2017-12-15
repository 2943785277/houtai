/*
 *  邮箱验证
 *  用户名 数字、字母、中文 、下划线,不能以下划线开头 2-12位
 *  密码验证 6-20位英文和数字
 *  验证码验证 4-10位英文或数字
 *  手机号验证 1开头 11位
 */
// var x = "我是全局变量";　　　　//定义全局变量x
// function a(){　　　　　　　　　//定义函数类结构a　　
//     this.x = "我是在函数类结构a中声明的哦";    
// }
// //定义普通函数，弹出当前指针所包含的变量x的值
// function f(){       
//     //alert (this.x);
// }
// //返回值为“我是在函数类结构a中声明的哦”
// f.call(new a());
//邮箱验证
//  数组传参   前四个参数为自定义参数  第五个参数为判断  0为正确   1为错误

var login = ['1']




//判断
function checkmail() {
  var mail = document.getElementById(mails[0]);
  if(mail.value == ''){
    console.log(mails[2]);
    zhengque[0] = '1'
  }else{
    if(verifymail(mails[1],mail.value)){
        console.log(mails[3]);
        zhengque[0] = '0'
    }else{
      console.log(mails[4]);
      zhengque[0] = '1'
    }
  }
}
//用户名验证
function checkname() {
  var userName = document.getElementById(names[0]);
  if(userName.value == ''){
    console.log(names[2]);
    zhengque[1] = '1'
    return false
  }else{
    if(verifymail(names[1],userName.value)){
        console.log(names[3]);
        zhengque[1] = '0'
    }else{
      console.log(names[4]);
      zhengque[1] = '1'
      return false
    }
  }
}

//手机号验证
function checkphone(objs,i){
  var phone = document.getElementById('phone');
  if(phone.value == ''){
  	console.log('请输入手机号');
    objs[i] = '2'
    alert(login)
    return false
  }else{
    if(verifyphone(phone.value)){
    	console.log('手机号输入正确');
       objs[i] = '0'
       alert(login)
    }else{
       console.log('手机号输入有误');
       objs[i] = '1'
       alert(login)
       return false
    }
  }
}
//密码验证
function checkpsd() {
  var psd = document.getElementById('psd');
  if(psd.value == ''){
    console.log('请输入密码');
  }else{
    if(verifypsd(psd.value)){

    }else{
      console.log('密码输入错误');
    }
  }
}


//验证码验证
function checkcode() {
  var code = document.getElementById('indentCode');
  if(code.value == ''){
    console.log('请输入验证码');
  }else{
    if(verifycode(code.value)){

    }else{
      console.log('验证码输入有误');
    }
  }
}
//手机号验证
function checkphone1() {
  var phone = document.getElementById('phone');
  if(phone.value == ''){
    console.log('请输入手机号');
  }else{
    if(verifyphone(phone.value)){
        console.log('手机号输入正确')
    }else{
      console.log('手机号输入有误');
    }
  }
}

//验证
function verifymail(regularly,val) {
  //var mail = '/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/';
  var mail = regularly;
  if(mail.test(val)){
    return true;
  }else{
    return false;
  }
}
function verifyname(val) {
  var userName = /^(?!_)[A-Za-z0-9_\s\u4e00-\u9fa5_:！]{2,40}$/;
  if(userName.test(val)){
    return true;
  }else{
    return false;
  }
}
function verifypsd(val) {
  var psd = /^(?![0-9]+$)(?![a-zA-Z]+$)(?=.*[A-Za-z])(?=.*\d)[0-9A-Za-z#@!~%^&*]{6,20}$/;
  if(psd.test(val)){
    return true;
  }else{
    return false;
  }
}
function verifycode(val) {
  var code = /1[3|5|7|8|]\d{9}/;
  if(code.test(val)){
    return true;
  }else{
    return false;
  }
}
function verifyphone(val) {
  var phone = /^1\d{10}/;
  if(phone.test(val)){
    return true;
  }else{
    return false;
  }
}
