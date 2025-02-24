import { useEffect } from 'react';

export const useStickyCard = () => {
  useEffect(() => {
    let timeScrolling = 0;

    const handleStickyCard = (event) => {
      const tilesSticky = document.querySelectorAll('.stickyTile');
      const blogCard = document.querySelectorAll('.blog-card');
      const imgFixed = document.querySelector('.img-sticky-side-fixed');
      
      let scrollCount = 0;

      tilesSticky.forEach((e, i) => {
        const nextSibling = e.nextElementSibling;
        if (nextSibling && nextSibling.classList.contains('stickyTile')) {
          const thisTop = e.offsetTop;
          const nextSiblingTop = nextSibling.offsetTop;
          const offset = 200;
          const gap = ((thisTop + offset) - nextSiblingTop);
          scrollCount = (gap <= 0 ? 0 : gap);
          const amount = (1 - (scrollCount * 0.0004)).toFixed(4);
          
          if (scrollCount > -50 && scrollCount < 250) {
            e.querySelector('.wrapper').style.transform = `perspective(10px) scale(${amount})`;
            e.querySelector('.wrapper').style.filter = `brightness(${1 - (scrollCount * 0.0009)})`;
            e.querySelector('.wrapper').style.opacity = amount <= 0.93 ? 0 : 1;
          }
          
          ((thisTop + offset) >= nextSiblingTop) ? 
            e.classList.add('zoom-out') : 
            e.classList.remove('zoom-out');
        }
      });

      tilesSticky.forEach((e, i) => {
        const parent = e.closest('.stickyTileContainer');
        if (event.type === 'resize' || event.type === 'load' || (event.type === 'scroll' && timeScrolling < 2)) {
          if (!(event.type === 'resize' && window.innerWidth < 767)) {
            e.style.height = 'unset';
          }
          if (i === 0) parent.dataset.childHeight = 0;
          if (parseInt(parent.dataset.childHeight) < e.offsetHeight) {
            parent.dataset.childHeight = e.offsetHeight;
          }
          if (i === tilesSticky.length - 1) {
            const offset = (window.innerWidth > 768) ? 18 : 0;
            if (event.type === 'resize' && window.innerWidth < 767) {
              if (parseInt(parent.dataset.childHeight) - offset < window.innerHeight) {
                parent.querySelectorAll('.stickyTile').forEach(tile => {
                  tile.style.height = parent.dataset.childHeight + 'px';
                  tile.classList.remove('position-static');
                });
              }
            } else {
              parent.querySelectorAll('.stickyTile').forEach(tile => {
                if (parseInt(parent.dataset.childHeight) - offset > window.innerHeight) {
                  tile.classList.add('position-static');
                } else {
                  tile.style.height = parent.dataset.childHeight + 'px';
                  tile.classList.remove('position-static');
                }
              });
            }
            if (event.type === 'scroll') timeScrolling++;
          }
        }
      });
    };

    const stickySide = () => {
      const blogCard = document.querySelectorAll('.blog-card');
      const imgFixed = document.querySelector('.img-sticky-side-fixed');
      const winScroll = window.scrollY;
      const windowGap = window.innerHeight * 0.5;

      blogCard.forEach(card => {
        card.classList.remove("active");
        const top = card.offsetTop;
        const bottom = top + card.offsetHeight;
        
        if (winScroll > top - windowGap && winScroll < bottom - windowGap) {
          card.classList.add("active");
          const srcImg = card.querySelector(".img-sticky-side").getAttribute("src") || 
                        card.querySelector(".img-sticky-side").getAttribute("data-src");
          
          if (srcImg !== imgFixed.querySelector("img").getAttribute("src")) {
            imgFixed.classList.add("active");
            setTimeout(() => {
              imgFixed.querySelector("img").setAttribute("src", srcImg);
              imgFixed.classList.remove("active");
            }, 300);
          }
        }
      });
    };

    // Add event listeners
    window.addEventListener('resize', handleStickyCard);
    window.addEventListener('load', handleStickyCard);
    window.addEventListener('scroll', (e) => {
      handleStickyCard(e);
      stickySide();
    });

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleStickyCard);
      window.removeEventListener('load', handleStickyCard);
      window.removeEventListener('scroll', handleStickyCard);
    };
  }, []);
};