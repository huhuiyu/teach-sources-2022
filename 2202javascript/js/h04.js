console.log('in h04.js......');

//#region 基本的样式修改

let btn01 = document.getElementById('btn01');
let div01 = document.getElementById('div01');
// 点击btn01时修改div01的样式
btn01.addEventListener('click', () => {
  // js可以通过页面元素的style属性修改样式
  // css的属性都要从-表达式转换成驼峰表达式
  // 例如border-width的css样式会转换成borderWidth
  div01.style.backgroundColor = '#ff0000';
  div01.style.color = '#fff';
  div01.style.fontSize = '2rem';
});

// 修改class的方式改动样式
let sp01 = document.getElementById('sp01');
let sp02 = document.getElementById('sp02');
let sp03 = document.getElementById('sp03');

console.log('修改class属性的元素：', sp01, sp02, sp03);

sp02.addEventListener('click', () => {
  console.log('点击sp02');
  /* 
    alt + shift + a
    页面元素.classList可以操作页面元素class属性值
    remove方法可以移除指定名称的class值
    add方法可以添加指定名称的class值
  */
  // 先移除所有菜单元素的激活样式
  sp01.classList.remove('active');
  sp02.classList.remove('active');
  sp03.classList.remove('active');
  // 再给点击的元素添加激活样式
  sp02.classList.add('active');
});

sp03.addEventListener('click', () => {
  console.log('点击sp02');

  sp01.classList.remove('active');
  sp02.classList.remove('active');
  sp03.classList.remove('active');

  sp03.classList.add('active');
});

sp01.addEventListener('click', () => {
  console.log('点击sp02');

  sp01.classList.remove('active');
  sp02.classList.remove('active');
  sp03.classList.remove('active');

  sp01.classList.add('active');
});

//#endregion
