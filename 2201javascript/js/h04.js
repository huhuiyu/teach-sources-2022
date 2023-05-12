console.log('in h04.js。。。。。。');

//#region 延迟跳转页面的部分

let btn1 = document.getElementById('btn1');
let sp1 = document.getElementById('sp1');

// 默认不要显示延迟跳转的提示信息
sp1.style.display = 'none';

btn1.addEventListener('click', () => {
  sp1.style.display = 'inline';

  /* 
    setTimeout是延迟执行代码
    第一个参数是要延迟的执行的代码块(方法/函数)
    第二个参数是延迟的毫秒数
  */

  // 延时执行跳转
  setTimeout(() => {
    // js跳转页面 location是js内置对象
    // 可以获取或者设置当前浏览页面地址信息
    location.href = './h03.html';
  }, 5000);
});

//#endregion

//#region 倒计时跳转页面部分

let btn2 = document.getElementById('btn2');
let sp2 = document.getElementById('sp2');
// 倒计时变量
let count = 5;

btn2.addEventListener('click', () => {
  sp2.innerHTML = `${count}秒后跳转页面`;

  // 倒计时显示
  setInterval(() => {
    count--;
    sp2.innerHTML = `${count}秒后跳转页面`;
  }, 1000);

  //页面跳转
  setTimeout(() => {
    location.href = 'https://huhuiyu.top';
  }, 5000);
});

//#endregion

//#region 显示当前时间

let spNow = document.getElementById('spNow');
// Date是js内置对象，用于获取或者设置日期和时间信息
let now = new Date();
spNow.innerHTML = now;

/* 
  setInterval是定时重复执行任务
  参数1是要重复执行的代码块（方法/函数）
  参数2是间隔时间

  location.href的值可以是本网站的相对文件路径，也可以是完整的互联网路径地址
  和页面的a标记的功能以及路径完全一致
*/
setInterval(() => {
  now = new Date();
  spNow.innerHTML = now;
}, 1000);

//#endregion

//#region 自定义时间显示
let spTime = document.getElementById('spTime');

setInterval(() => {
  let time = new Date();
  // 获取分部的时间信息
  let year = time.getFullYear();
  let month = time.getMonth() + 1; // 月份是0-11，所以要加1
  let day = time.getDate();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  // 前导补零
  // 三元表达式
  // 逻辑表达式(真/假) ? 为真要执行的部分 : 为假要执行的部分
  second = second < 10 ? '0' + second : second;
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;

  spTime.innerHTML = `
    ${year}年${month}月${day}日 ${hour}:${minute}:${second}
  `;
}, 1000);

//#endregion
