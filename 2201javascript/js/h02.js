console.log('in h02.js......');

// txt01是加数文本框 ，txt02是被加数文本框
// btn01是=计算按钮 ， sp01是显示结果的span
// 目标是点击计算按钮，将加数文本框和被加数文本框的输入值相加后显示在sp01中

//#region 加法的运算部分

let txt01 = document.getElementById('txt01');
let txt02 = document.getElementById('txt02');
let btn01 = document.getElementById('btn01');
let sp01 = document.getElementById('sp01');

// 点击事件
btn01.addEventListener('click', () => {
  console.log('加法的点击处理');
  // 获取输入框的内容 value是输入框特有的属性，表示获取或者设置输入的值
  let num01 = txt01.value;
  let num02 = txt02.value;
  console.log('输入值是：', num01, num02);
  // 从文本框里面获取到的数据是字符串
  // 而字符串的加法是拼接
  // 所以如果要做加法，必须转换字符串为数值
  // 将计算的结果放到sp01中
  // parseFloat(值)可以尝试将值转换成数，如果无法转换返回是NaN
  // NaN其实是not a number的缩写，表示不是一个数
  sp01.innerHTML = parseFloat(num01) + parseFloat(num02);
});

//#endregion

//#region 乘法的部分

let txt03 = document.getElementById('txt03');
let txt04 = document.getElementById('txt04');
let btn02 = document.getElementById('btn02');
let sp02 = document.getElementById('sp02');

btn02.addEventListener('click', () => {
  let num01 = txt03.value;
  let num02 = txt04.value;

  sp02.innerHTML = num01 * num02;
});

//#endregion

// 完成减法和除法的效果，附加作业是完成取模（余商）的效果
