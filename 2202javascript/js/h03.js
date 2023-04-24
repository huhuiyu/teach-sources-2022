console.log('in h03.js====>');

//#region 加法运算的部分

let txt01 = document.getElementById('txt01');
let txt02 = document.getElementById('txt02');
let btn01 = document.getElementById('btn01');
let sp01 = document.getElementById('sp01');
console.log('加法相关页面元素：', txt01, txt02, btn01, sp01);

// 点击btn01（=）按钮时，将txt01和txt02的输入值相加的结果放到sp01中
btn01.addEventListener('click', () => {
  console.log('加法的计算按钮点击');
  // 获取输入值，value是输入框特有的属性，表示获取/设置输入框中的内容
  let num01 = txt01.value;
  let num02 = txt02.value;
  console.log('加法运算的输入值：', num01, num02);
  // 计算后显示到sp01中，输入值都是字符串类型
  // 而字符串相加是拼接字符，而不是数学运算，所以需要转换
  // parseFloat(值)是尝试将值转换成数，如果不能转换，返回的是NaN
  // NaN是not a number的缩写，表示不是一个数
  sp01.innerHTML = parseFloat(num01) + parseFloat(num02);
  // 1+1+"1"+1
  // console.log(1 + 1 + '1' + 1);
});

//#endregion

//#region 乘法运算的部分

let txt03 = document.getElementById('txt03');
let txt04 = document.getElementById('txt04');
let btn02 = document.getElementById('btn02');
let sp02 = document.getElementById('sp02');

console.log('乘法运算的相关元素：', txt03, txt04, btn02, sp02);
btn02.addEventListener('click', () => {
  let num03 = txt03.value;
  let num04 = txt04.value;

  // sp02.innerHTML = num03 * num04;
  sp02.innerHTML = parseFloat(num03) * parseFloat(num04);
});

//#endregion

// 作业，完成减法和除法以及取模的运算
