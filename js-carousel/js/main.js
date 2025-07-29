'use strict';

{
  const next = document.querySelector('.next');
  const ul = document.querySelector('ul');
  const slides = ul.children;

  next.addEventListener('click', () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth}px)`;
  });
}