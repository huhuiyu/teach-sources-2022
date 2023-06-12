// 通用工具类方法
console.log('执行tools.js========>');

const INFO = '通用的工具js';

// 获取当前时间，并定制显示的格式的通用方法
// js的变量可以是任意类型，包括箭头函数
// 调用函数要带上()
let now = () => {
  let time = new Date();
  console.log(time);

  // 分段获取时间信息
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  // 前导补零
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;
  hour = hour < 10 ? '0' + hour : hour;
  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;
  // return 值;也是无条件中断当前方法的执行
  // 但是调用者可以获取到return后面的值

  // 返回定制格式的时间信息
  return `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
};

// 抽取代码为通用方法的一个小口诀
// 通用的部分移动到方法中，方法自身不能获取的信息通过参数传入
// 设计一个方法，作用是给定年月信息，返回指定年月有多少天
/* 
  自定义方法（函数）的格式
  function 方法名称(方法的参数列表...) {
    调用方法时要执行的代码
    如果需要返回数据给调用者，就通过return 值;来完成
  }
  // 方法的调用
  方法名称(需要传递给方法的实际参数值)
  如果需要获取方法返回的数据
  可以通过变量赋值表达式，例如
  let xxx = 方法名称(...)

*/
function computeDays(year, month) {
  // 对年月进行约束
  if (year < 1900 || year > 9999) {
    return 0;
  }

  if (month < 1 || month > 12) {
    return 0;
  }

  let run = year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
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
  return day;
}
