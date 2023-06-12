console.log('执行h03.js===========>');
// 调用页面其它js中的内容
console.log(INFO);
// 调用其它js中方法
now();

// 通过公用的方法来显示时间
let divTime = document.getElementById('divTime');
divTime.innerHTML = now();

console.log('2000年2月的天数：', computeDays(2000, 2));
console.log('2000年12月的天数：', computeDays(2000, 12));

// 公用方法计算年月的演示部分
let txtYear = document.getElementById('txtYear');
let txtMonth = document.getElementById('txtMonth');
let btnCompute = document.getElementById('btnCompute');
let spDays = document.getElementById('spDays');

btnCompute.addEventListener('click', () => {
  let year = txtYear.value;
  let month = txtMonth.value;

  let day = computeDays(year, month);
  if (day == 0) {
    spDays.innerHTML = '输入的年月值不合法';
  } else {
    spDays.innerHTML = day + '天';
  }
});

/* 
  JavaScript是嵌入在浏览器中的脚本语言
  可以控制页面元素和css并响应页面ui的操作
  比如通过id获取对应的页面元素
  然后可以修改元素的样式，内容，属性
  可以监听事件（例如，click点击）来响应用户的操作
  还可以获取表单元素的输入值（value属性）

  <标记，元素名称  属性="值"...>
  例如 <div style='...'>,<img src="..." alt=''>
*/
