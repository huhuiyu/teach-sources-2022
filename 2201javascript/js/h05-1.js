// 本地存储
let sp01 = document.getElementById('sp01');
let info = localStorage.getItem('info');
info = info ? info : '';
sp01.innerHTML = info;

// 会话存储
let sp02 = document.getElementById('sp02');
let sinfo = sessionStorage.getItem('sinfo');
sinfo = sinfo ? sinfo : '';
sp02.innerHTML = sinfo;
