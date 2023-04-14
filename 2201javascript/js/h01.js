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

// () => {}是箭头函数
for (let i = 0; i < 100; i++) {
  setTimeout(() => {
    btn01.click();
  }, 1000 * i);
}
