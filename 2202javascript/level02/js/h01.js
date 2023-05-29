//#region 输入年龄的校验功能

let txtAge = document.getElementById('txtAge');
let btnAge = document.getElementById('btnAge');
let spAge = document.getElementById('spAge');

btnAge.addEventListener('click', () => {
  // 字符串的trim()方法表示去掉字符串头尾的空白字符
  let age = txtAge.value.trim();
  console.log(`==${age}==`);
  spAge.innerHTML = '';
  // 必须输入
  /* 
    if(逻辑表达式) {
      // 逻辑表达式为true时要执行的代码块
    }
    逻辑表达式是只会返回true/false两种结果的表达式
    == 相等测试 != 不相等测试 > 大于 < 小于 >= 大于或者等于 <= 小于或者等于
    === 值和类型都要相等
    return表示无条件终止当前方法/函数的执行
  */
  if (age == '') {
    spAge.innerHTML = '年龄必须输入';
    return;
  }
  // 判断是否是数 isNaN(值)是判断值是否不是一个数，不是返回真，否则返回假
  if (isNaN(age)) {
    spAge.innerHTML = '年龄必须是数';
    return;
  }
  // 判断是否为整数
  let iage = parseInt(age);
  let fage = parseFloat(age);

  console.log(iage, fage);
  if (iage != fage) {
    spAge.innerHTML = '年龄必须是整数';
    return;
  }
  // 年龄必须在[1-200]之间
  // || 逻辑短路或运算 前后的表达式只要一个为真，结果为真，否则为假
  // 短路是如果计算机通过第一个表达式就能确认结果，就不会运算第二个表达式
  // 短路或就是如果第一个表达式为真，就直接返回真，不运算第二个表达式
  // && 逻辑短路与运算 前后的表达式都为真，结果才是真，否则为假
  // 如果第一个表达式为假，就直接返回假，不运算第二个表达式
  // ! 逻辑取反，真变假，假就变真
  if (iage < 1 || iage > 200) {
    spAge.innerHTML = '年龄必须在[1-200]之间';
    return;
  }

  spAge.innerHTML = `你的年龄是：${iage}`;
});

//#endregion

//#region 输入年月，显示有多少天

let txtYear = document.getElementById('txtYear');
let txtMonth = document.getElementById('txtMonth');
let btnOk = document.getElementById('btnOk');
let spDay = document.getElementById('spDay');

btnOk.addEventListener('click', () => {
  let year = txtYear.value;
  let month = txtMonth.value;
  // 作业题：年份输入必须是1900-9999年之间，月份是1-12
  // 第一个是闰年的判断
  // 能够被400整除或者能够被4整除且不能被100整除
  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
  // 计算日期
  let day = 0;

  if (
    month == 1 ||
    month == 3 ||
    month == 5 ||
    month == 7 ||
    month == 8 ||
    month == 10 ||
    month == 12
  ) {
    day = 31;
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    day = 30;
  } else if (run && month == 2) {
    day = 29;
  } else {
    day = 28;
  }
  spDay.innerHTML = `${year}年${month}月有${day}天`;
});

/* 
  阶梯if流程判断
  if(逻辑表达式1) {
    逻辑表达式1为真要执行的代码块
  }
  else if(逻辑表达式2) {
    逻辑表达式2为真要执行的代码块
  }...
  else {
    上面所有的逻辑表达式都不为真要执行的代码块
  }
  阶梯的意思是从上至下任意一个逻辑表达式为真，后续区块都直接跳过而不会继续判定
  除了if，其它区块都可以省略，if 和 else 只能有一个，elseif可以无数个
  if elseif
  if else
  if
*/

//#endregion
