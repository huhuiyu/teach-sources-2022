console.log('in h01.js=======>');

// 获取页面指定id的元素
/* 
  alt + shift + a 是多行注释快捷键
  let是js变量什么关键字，后面是变量的名称
  js是弱类型语言，所以变量声明都是let，不需要区分类型
  =是赋值，让=号前面的变量为后面的对象（值）
  
  document.getElementById('页面元素的id')
  表示获取指定id的页面元素

  页面元素.innerHTML可以获取/设置页面元素的内容

*/
let div01 = document.getElementById('div01');
console.log('获取的元素是：', div01, div01.innerHTML);

// 替换内容
div01.innerHTML = '修改div中的内容';

// 点击计数显示功能 ==================================
let btn01 = document.getElementById('btn01');
let sp01 = document.getElementById('sp01');
// 记录点击次数的变量
let count = 0;

console.log('点击计数相关元素：', btn01, sp01);

/* 
  页面元素.addEventListener('click',()=>{
    页面元素被点击时要执行的代码
  })

  addEventListener是页面元素的事件处理
  click表示点击事件
*/
btn01.addEventListener('click', () => {
  // 计数加一
  count = count + 1;
  // 更新计数的显示
  sp01.innerHTML = '点击的次数：' + count;
});

// // () => {}是箭头函数
// for (let i = 0; i < 100; i++) {
//   setTimeout(() => {
//     btn01.click();
//   }, 1000 * i);
// }

// 数学运算符
let a = 100;
let b = 7;

/* 
  ``是模板字符串，和''/""标准字符串区别：
  1:模板字符串支持多行字符
  2:支持变量注入表达式${变量名|变量的运算}
  +加-减*乘/除
  js没有整除法，哪怕除数和被除数都是整数，只要除不尽就会出现小数的结果
  %取模运算符，也叫取余，结果是余商，也就是整除不尽余下数
  例如 100 % 2 结果是0，7 % 2结果是1
*/

console.log(
  `
数学运算符：
${a} + ${b} = ${a + b}
${a} - ${b} = ${a - b}
${a} * ${b} = ${a * b}
${a} / ${b} = ${a / b}
${a} % ${b} = ${a % b}
`
);

// 小括号是提升优先级
console.log(2 + 3 * 5, (2 + 3) * 5);
// 3,3,8,8 =24
