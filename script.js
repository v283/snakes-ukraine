/* script.js - невелика логіка: підсвічення активного меню та fallback-зображення */
document.addEventListener('DOMContentLoaded', function(){
  // підсвічування активного посилання
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (href==='index.html' && path==='')) a.classList.add('active');
  });

  // fallback для картинок: якщо не знайшлася - замінюємо на просту заливку (не ламає вигляд)
  document.querySelectorAll('img[data-fallback]').forEach(img=>{
    img.addEventListener('error', ()=>{
      img.style.background = 'linear-gradient(135deg, rgba(71,176,75,0.08), rgba(24,89,43,0.04))';
      img.style.objectFit = 'contain';
      img.src = img.getAttribute('data-fallback');
    }, {once:true});
  });
});
