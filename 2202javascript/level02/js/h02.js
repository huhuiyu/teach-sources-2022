//#region 属性控制图片更换效果

let img1 = document.getElementById('img1');

// 更改元素的属性
// 页面元素.setAttribute('属性的名称','属性的值')
// 可以将元素的属性更换成对应的值
// 注意事项，js中路径是调用它的html页面决定的，而不是相对于js的路径
img1.setAttribute('src', './images/img28.jpg');

// 动态的更换图片效果
let count = 1;

setInterval(() => {
  count++;
  // 控制图片的数量不能超出
  if (count > 4) {
    count = 1;
  }
  // 切换图片的流程控制
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

//#region 背景模式图片更换效果

let div1 = document.getElementById('div1');

let scount = 1;

setInterval(() => {
  scount++;
  if (scount > 4) {
    scount = 1;
  }
  if (count == 1) {
    div1.style.backgroundImage = "url('./images/img28.jpg')";
  } else if (count == 2) {
    div1.style.backgroundImage = "url('./images/img29.jpg')";
  } else if (count == 3) {
    div1.style.backgroundImage = "url('./images/img30.jpg')";
  } else if (count == 4) {
    div1.style.backgroundImage = "url('./images/img31.jpg')";
  }
}, 5000);

//#endregion
