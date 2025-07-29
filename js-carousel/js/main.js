'use strict';
{
    const next = document.querySelector('.next');
    const ul = document.querySelector('ul');

    next.addEventListener('click', () => {
        ul.style.transform = 'translateX(-200px)';
        // 左に200px動かす
    });
}