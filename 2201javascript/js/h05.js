//#region 本地存储演示1

let txt01 = document.getElementById('txt01');
let btn01 = document.getElementById('btn01');
let btn02 = document.getElementById('btn02');

let info = localStorage.getItem('info');
info = info ? info : '';
txt01.value = info;

btn01.addEventListener('click', () => {
  localStorage.setItem('info', txt01.value);
  alert('信息保存完毕');
});

btn02.addEventListener('click', () => {
  localStorage.removeItem('info');
  alert('信息移除完毕');
});

/* 
  localStorage是内置的保存信息到浏览器本地的对象
  getItem('保存到本地的信息名称')方法是获取指定名称的保存信息
  setItem('要保存的信息的名称',保存的值)方法是将值保存到指定的名称的本地存储中
  removeItem('要移除的信息的名称')方法是将对应名称的数据从本地存储中移除
  本地存储在同一个网站下是共享的，a页面中保存的可以在b页面中获取
*/

//#endregion

//#region 会话存储演示
let txt02 = document.getElementById('txt02');
let btn03 = document.getElementById('btn03');
let btn04 = document.getElementById('btn04');

let sinfo = sessionStorage.getItem('sinfo');
sinfo = sinfo ? sinfo : '';
txt02.value = sinfo;

btn03.addEventListener('click', () => {
  sessionStorage.setItem('sinfo', txt02.value);
  alert('保存信息完毕');
});

btn04.addEventListener('click', () => {
  sessionStorage.removeItem('sinfo');
  alert('移除信息完毕');
});

// sessionStorage的功能方法和localStorage对象是完全一致的
// 但是sessionStorage保存的信息在浏览器关闭后会被自动删除
// 所以敏感信息使用sessionStorage保存会更加安全

//#endregion
