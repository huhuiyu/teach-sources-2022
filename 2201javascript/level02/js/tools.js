console.log('in tools.js======>');
// 公用的工具类
const INFO = '黑暗骑士的通用工具js';

//#region 公用的获取当前日期和时间的代码

// js的变量可以指向任何元素，包括箭头函数
let now = () => {
  let time = new Date();
  console.log('时间信息：', time);

  // 分段获取具体的时间信息
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
  // 组合结果字符
  let result = `
    ${year}年${month}月${day}日 ${hour}:${minute}:${second}
  `;
  // return 值;和单独的return的区别
  // 虽然都是无条件中断当前方法的执行
  // 但是如果后面跟了值，那么调用该方法的地方会得到该值
  return result;
};

// 设计一个函数，给定年月，返回对应年月的天数
// 如果参数不正确，返回0天，比如月份不是1-12,年份不是4位数
// 设计公用方法的口诀，公用的代码抽离到方法中，非公用的数据通过参数传入

/* 
  function是自定义方法（函数）
  格式:
  function 名称(参数列表...) {
    调用方法要执行的代码
  }
  调用方式是：
  方法名称(实际的参数...)
*/

function computeDays(year, month) {
  if (month < 1 || month > 12) {
    return 0;
  }
  if (year < 1900 || year > 9999) {
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

//#endregion
