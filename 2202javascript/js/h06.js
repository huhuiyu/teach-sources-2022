//#region 本地存储演示

let txt1 = document.getElementById('txt1');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');

// 读取本地存储的信息
let info = localStorage.getItem('info');
info = info ? info : '';
txt1.value = info;

btn1.addEventListener('click', () => {
  localStorage.setItem('info', txt1.value);
  alert('保存信息成功！');
});

btn2.addEventListener('click', () => {
  localStorage.removeItem('info');
  alert('移除信息完毕！');
});

// localStorage是浏览器的本地存储对象，可以保存一些简单的字符串
// 保存的隔离级别是网站，同一个网站保存的信息可以在不同页面共享
// setItem方法是保存信息，第一个参数是保存的名称，第二个是要保存的值
// getItem方法是获取保存的信息，参数是保存的名称
// removeItem方法是移除保存的信息，参数是保存的名称

//#endregion

//#region 会话存储演示
let txt2 = document.getElementById('txt2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');

let sinfo = sessionStorage.getItem('sinfo');
sinfo = sinfo ? sinfo : '';
txt2.value = sinfo;

btn3.addEventListener('click', () => {
  sessionStorage.setItem('sinfo', txt2.value);
  alert('保存信息完毕！');
});

btn4.addEventListener('click', () => {
  sessionStorage.removeItem('sinfo');
  alert('移除信息成功！');
});

// sessionStorage是会话存储，和本地存储的方法以及效果是完成一样
// 唯一的区别就是会话存储的内容在浏览器关闭之后会自动删除
// 所以会话存储更加安全，适合存储敏感的信息

//#endregion
