//#region 图片更换效果

let img1 = document.getElementById('img1');

// js修改元素的任意属性
// 元素.setAttribute('要设置的属性的名称','对应属性的值')
img1.setAttribute('src', './images/img31.jpg');
img1.setAttribute('title', '这里是一个图片！');

let count = 1;

setInterval(() => {
  count++;
  // 只有四种情况的控制语句
  if (count > 4) {
    count = 1;
  }
  // 根据count的值确定要更换图片
  if (count == 1) {
    img1.setAttribute('src', './images/img28.jpg');
  } else if (count == 2) {
    img1.setAttribute('src', './images/img29.jpg');
  } else if (count == 3) {
    img1.setAttribute('src', './images/img30.jpg');
  } else if (count == 4) {
    img1.setAttribute('src', './images/img31.jpg');
  }
}, 5000);

//#endregion

//#region 背景图片更换效果

let a2 = document.getElementById('a2');
let count2 = 1;

setInterval(() => {
  count2++;
  if (count2 > 4) {
    count2 = 1;
  }
  if (count == 1) {
    a2.style.backgroundImage = 'url("./images/img28.jpg")';
  } else if (count == 2) {
    a2.style.backgroundImage = 'url("./images/img29.jpg")';
  } else if (count == 3) {
    a2.style.backgroundImage = 'url("./images/img30.jpg")';
  } else if (count == 4) {
    a2.style.backgroundImage = 'url("./images/img31.jpg")';
  }
}, 5000);

//#endregion
