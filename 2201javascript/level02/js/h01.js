//#region 流程判定之年龄输入演示

let txtAge = document.getElementById('txtAge');
let btnAge = document.getElementById('btnAge');
let spAge = document.getElementById('spAge');

btnAge.addEventListener('click', () => {
  // 去掉原有的错误提示
  spAge.innerHTML = '';
  // trim方法是字符串对象特有的，表示去掉头尾的空白字符
  let age = txtAge.value.trim();
  console.log('输入的年龄是：', age);
  // 必须输入内容
  /* 
    单个if的格式
    if(逻辑表达式) {
      // 当逻辑表达式为真的时候要执行的代码
    }
    逻辑表达式是只会返回真或者假两种结果的表达式
    常见的逻辑表达式：
    == 相等 < 小于 > 大于  <= 小于或者等于 >= 大于或者等于
    === 值相等且类型相同
    return关键字的作用是无条件终止当前方法的执行
    所以一般都会搭配逻辑判定使用
    js有一个很不严谨的地方，就是非0数字也会判定为真，还有任何存在值的对象也是真
  */
  if (age == '') {
    spAge.innerHTML = '年龄必须输入';
    return;
  }
  // isNaN(值)是判定值是否不是一个数，不是数返回真，否则返回假
  if (isNaN(age)) {
    spAge.innerHTML = '必须输入数';
    return;
  }
  // 整数的判定,parseInt是转换值成整数，parseFloat是转换值为小数
  let iage = parseInt(age);
  let fage = parseFloat(age);
  console.log('转换数值的结果', iage, fage);
  // 值转换成小数和整数的结果不一样就一定是小数 != 是不相等测试
  if (iage != fage) {
    spAge.innerHTML = '请输入整数';
    return;
  }
  // 必须是0到200之间
  // &&是短路逻辑与，&&前后的表达式都为真才返回真，否则返回假
  // 短路与表示前面的表达式为假，就直接返回假，不对后面的表达式进行运算
  // !逻辑取反，把值真的变假，假变真
  // ||短路逻辑或，||前后的表达式只要一个为真，结果就是真，否则返回假
  if (iage >= 0 && iage <= 200) {
    spAge.innerHTML = '你的年龄是:' + iage;
    return;
  }
  spAge.innerHTML = '年龄必须是在0-200之间';
});

//#endregion

//#region 输入年月，显示日期

let txtYear = document.getElementById('txtYear');
let txtMonth = document.getElementById('txtMonth');
let btnDay = document.getElementById('btnDay');
let spDay = document.getElementById('spDay');

// 1，3，5，7，8，10，12月固定为31天
// 4，6，9，11月固定为30天
// 2月闰年为29天，否则为28天
// 能够被400整除的或者能够被4整除但是不能被100整除的年份就是闰年

btnDay.addEventListener('click', () => {
  let year = txtYear.value.trim();
  let month = txtMonth.value.trim();
  console.log(`输入的年月是${year},${month}`);
  // 作业题，限制输入的年份必须是0-9999，月份必须是1-12
  //1:是否为闰年的逻辑表达式
  // 逻辑运算符的优先级，not and or ，取反，与，或
  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
  console.log(`${year}是否为闰年${run}`);
  // 判定日期数
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
  阶梯if流程判断的格式
  if(逻辑表达式1) {
    逻辑表达式1为真时要执行的代码块
  }else if(逻辑表达式2) {
    逻辑表达式2为真时要执行的代码块
  }...
  else{
    上面所有逻辑表达式都不是真的时候要执行代码
  }
  // 任何一级的判定为true，后续的逻辑块都不会执行
  // 除了第一个if是必须的块，其它都可以省略
*/

//#endregion
