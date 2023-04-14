console.log('引用外部js文件');

let btn01 = document.getElementById('btn01');
let txt01 = document.getElementById('txt01');

btn01.addEventListener('click', () => {
  alert('欢迎：' + txt01.value);
});
