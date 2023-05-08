console.log('in h05.js。。。。。。');

//#region 延迟跳转

let btn01 = document.getElementById('btn01');
let sp01 = document.getElementById('sp01');

// 默认隐藏提示信息
sp01.style.display = 'none';

btn01.addEventListener('click', () => {
  // 显示提示信息
  sp01.style.display = 'inline';

  /* 
    setTimeout(
      要执行的方法,延迟的毫秒数
    )
  */
  // 延迟执行
  setTimeout(() => {
    // js控制页面跳转，js无法提示文件路径是因为
    // ，js里面的路径是相对于引入js的html页面的，而不是js所在的路径
    location.href = './h04.html';
  }, 5000);
});

//#endregion

//#region 倒计时延迟任务

let btn02 = document.getElementById('btn02');
let sp02 = document.getElementById('sp02');

// 倒计时的变量
let count = 5;

btn02.addEventListener('click', () => {
  // ``是模板字符串，可以多行字符，可以通过${变量名称}来显示变量值
  sp02.innerHTML = `将在${count}秒之后跳转页面`;

  // 循环版本的延迟执行
  setInterval(() => {
    // --是自减1（count=count-1）
    count--;
    sp02.innerHTML = `将在${count}秒之后跳转页面`;
  }, 1000);

  // 跳转
  setTimeout(() => {
    location.href = 'https://huhuiyu.top';
  }, 5000);
});

//#endregion

//#region 显示时间

// 获取系统当前时间
let now = new Date();

let spNow = document.getElementById('spNow');

spNow.innerHTML = `${now}`;

/* 
  // 间隔时间到之后就会执行（反复执行）
  setInterval(要间隔时间执行的方法，间隔的时间)
*/
setInterval(() => {
  now = new Date();
  spNow.innerHTML = `${now}`;
}, 1000);

//#endregion
