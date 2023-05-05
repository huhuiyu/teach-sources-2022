console.log('in h03.js。。。。。。');

//#region js修改style的部分

let btn1 = document.getElementById('btn1');
let div1 = document.getElementById('div1');

btn1.addEventListener('click', () => {
  // js可以通过页面元素.style属性来修改样式
  // css的属性要转换成js能支持的驼峰表达式
  // 例如background-color样式会被转换成backgroundColor
  // 也就是去掉-号，并且转换-号后面的字母为大写
  div1.style.backgroundColor = '#ff0000';
  div1.style.color = '#fff';
});

//#endregion

//#region js修改css的部分

let sp1 = document.getElementById('sp1');
let sp2 = document.getElementById('sp2');
let sp3 = document.getElementById('sp3');

sp2.addEventListener('click', () => {
  /* 
    页面元素.classList可以操控元素class列表值
    remove是移除指定名称的class值
    add是添加指定名称的class值
  */

  // 移除所有的激活样式
  sp1.classList.remove('active');
  sp2.classList.remove('active');
  sp3.classList.remove('active');

  // 给点击的元素添加激活样式
  sp2.classList.add('active');
});

sp1.addEventListener('click', () => {
  sp1.classList.remove('active');
  sp2.classList.remove('active');
  sp3.classList.remove('active');

  sp1.classList.add('active');
});

sp3.addEventListener('click', () => {
  sp1.classList.remove('active');
  sp2.classList.remove('active');
  sp3.classList.remove('active');

  sp3.classList.add('active');
});

//#endregion
