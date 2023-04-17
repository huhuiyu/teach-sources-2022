// 第一行代码是验证导入是否正确，通过浏览器控制台查看
console.log('in h02.js==========>');

/* 
  alt + shift + a 是多行注释
  let 是声明变量
  = 是赋值 js是弱类型语言，所以变量声明不需要类型
  document是js内置对象，表示页面文档模型，可以完整的获取页面全部信息
  document.getElementById('页面元素的id属性值')
  表示获取页面对应id值的元素
*/
let div01 = document.getElementById('div01');
console.log(div01);

// 页面元素.innerHTML属性可以获取或者替换页面元素的内容
div01.innerHTML = '修改div的内容';

// 记录点击次数的功能
let btn01 = document.getElementById('btn01');
let sp01 = document.getElementById('sp01');
console.log('计数相关元素：', btn01, sp01);
// 用于计数的变量
let count = 0;

// 页面元素.addEventListener对页面元素表示添加事件处理
// 参数click表示点击事件，参数2是要执行函数(代码块)
btn01.addEventListener('click', () => {
  // 计数变量+1
  count = count + 1;
  // 更新页面的显示
  sp01.innerHTML = '点击次数为：' + count;
});

// 数学运算符
let a = 100;
let b = 7;

/* 
  ``是模板字符串，和''/""的标准字符串的区别
  1：模板字符串内容可以换行
  2：模板字符串可以通过${变量名称}将变量的内容添加到指定位置
  3：变量也支持简单的运算表达式
*/
console.log(`
  数学运算符：
  ${a} + ${b} = ${a + b}
  ${a} - ${b} = ${a - b}
  ${a} * ${b} = ${a * b}
  ${a} / ${b} = ${a / b}
  ${a} % ${b} = ${a % b}
`);

// +加 -减 *乘 /除（js的整数除法是除不尽也是小数结果）
//  % 取模运算，也就是余商，整除不尽余下的数
//  例如 100 % 3 整除结果是33，余数为1
console.log((2 + 3) * 5, 2 + 3 * 5);
// ()是提示优先级，否则就是按照四则运算的优先级运算
