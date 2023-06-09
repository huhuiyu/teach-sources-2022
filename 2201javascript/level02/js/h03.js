console.log('in h03.js========>');
// 调用前面导入的js的内容
console.log('tools中的INFO常量', INFO);
// 调用公用js中函数
now();

let divTime = document.getElementById('divTime');
divTime.innerHTML = now();

// 测试获取年月天数的方法
let day = computeDays(2000, 2);
console.log('计算的天数为：', day);

day = computeDays(1800, 12);
console.log('计算的天数为：', day);

day = computeDays(2000, 15);
console.log('计算的天数为：', day);

//#region 计算天数（公用js的函数应用）
let txtYear = document.getElementById('txtYear');
let txtMonth = document.getElementById('txtMonth');
let btnCompute = document.getElementById('btnCompute');
let spDay = document.getElementById('spDay');

btnCompute.addEventListener('click', () => {
  let year = txtYear.value;
  let month = txtMonth.value;

  let result = computeDays(year, month);
  if (result == 0) {
    spDay.innerHTML = '输入的年月信息不合法';
  } else {
    spDay.innerHTML = result + '天';
  }
});

//#endregion

// 随机数
console.log('随机数：', Math.random());

//  1 2
// 单 双
//  下注值 中奖值 总成本
//    1     2     1
//    2     4     3
//    4     8     7
//    8    16    15
