"use strict";
const mobileCollectionNav = () => {
    const bar = document.getElementById('collection-head');
    const btn = document.querySelector('.icon');
    btn.style.display = 'block';
    btn.addEventListener('click', () => {
        bar.style.display = 'flex';
        bar.style.width = '100%';
        bar.style.height = '100px';
        setTimeout(() => {
            btn.style.display == 'block' ? btn.style.display = 'none' : btn.style.display = 'block';
        }, 500);
    });
};
mobileCollectionNav();
const collectionPages = () => {
    const genPage = Array.from(document.querySelectorAll('.collection-box'));
    const popularBtn = Array.from(document.querySelectorAll('#popular-btn'));
    const largeBtn = document.getElementById('large-btn');
    const smallBtn = document.getElementById('small-btn');
    const exclusiveBtn = document.getElementById('exclusive-btn');
    const popularPage = Array.from(document.querySelectorAll('#popular'));
    const largePage = document.getElementById('large');
    const smallPage = document.getElementById('small');
    const exclusivePage = document.getElementById('exclusive');
    genPage.forEach(page => {
        page.style.display = 'none';
    });
    popularPage.forEach(popular => {
        popular.style.display = 'flex';
    });
    let showPopularPage = () => {
        popularBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                genPage.forEach(page => {
                    page.style.display = 'none';
                });
                popularPage.forEach(popular => {
                    popular.style.display = 'flex';
                });
            });
        });
    };
    let showLargePage = () => {
        largeBtn.addEventListener('click', () => {
            genPage.forEach(page => {
                page.style.display = 'none';
            });
            largePage.style.display = 'flex';
        });
    };
    let showSmallPage = () => {
        smallBtn.addEventListener('click', () => {
            genPage.forEach(page => {
                page.style.display = 'none';
            });
            smallPage.style.display = 'flex';
        });
    };
    let showExclusivePage = () => {
        exclusiveBtn.addEventListener('click', () => {
            genPage.forEach(page => {
                page.style.display = 'none';
            });
            exclusivePage.style.display = 'flex';
        });
    };
    showPopularPage();
    showLargePage();
    showSmallPage();
    showExclusivePage();
};
collectionPages();
