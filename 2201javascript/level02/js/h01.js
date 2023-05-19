//#region 流程判定之年龄输入演示

let txtAge = document.getElementById('txtAge');
let btnAge = document.getElementById('btnAge');
let spAge = document.getElementById('spAge');

btnAge.addEventListener('click', () => {
  // 去掉原有的错误提示
  spAge.innerHTML = '';
  // trim方法是字符串对象特有的，表示去掉头尾的空白字符
  let age = txtAge.value.trim();
  console.log('输入的年龄是：', age);
  // 必须输入内容
  if (age == '') {
    spAge.innerHTML = '年龄必须输入';
    return;
  }
});

//#endregion
