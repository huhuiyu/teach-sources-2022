// js中的单行注释

/*
  js的多行注释
  注释中的内容不会被执行
*/
console.log('外部的js文件'); // 单行注释可以在代码结尾，不推荐这种风格

let txt01 = document.getElementById('txt01');
let btn01 = document.getElementById('btn01');

btn01.addEventListener('click', () => {
  alert('欢迎：' + txt01.value);
});
