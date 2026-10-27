const dialog=document.querySelector('#battleDialog');
document.querySelector('#battleBtn').addEventListener('click',()=>dialog.showModal());
document.querySelector('.moves').addEventListener('click',e=>{if(e.target.tagName!=='BUTTON')return;const c=document.querySelector('#coins');c.textContent=Math.max(0,Number(c.textContent)+(e.target.value==='skill'?5:2));dialog.close()});
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
