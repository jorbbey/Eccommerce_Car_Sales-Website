"use strict";
const menuBar = () => {
    const btn = document.querySelector('.hamburger');
    const menu = document.querySelector('.mobile-menu');
    menu.style.display = 'none';
    let slideMenu = () => {
        menu.style.display == 'none' ? menu.style.display = 'flex' : menu.style.display = 'none';
    };
    btn.addEventListener('click', () => {
        btn.classList.toggle('open');
        slideMenu();
    });
};
menuBar();
const innerMenuSlide = () => {
    const desktopMenu = document.querySelector('.menu-bar');
    const mobileMenu = document.querySelector('.mobile-menu');
    const collectionBtn = Array.from(document.querySelectorAll('#collection-items'));
    const featuresBtn = Array.from(document.querySelectorAll('#features-items'));
    const collectionPage = document.querySelector('.Collection');
    const featuresPage = document.querySelector('.Features');
    const backBtn = Array.from(document.querySelectorAll('#inner-back-btn'));
    collectionPage.style.right = '-100%';
    featuresPage.style.right = '-100%';
    let collectionSlide = () => {
        if (desktopMenu.style.display == 'flex' && collectionPage.style.right == '-100%') {
            desktopMenu.style.display = 'none';
            collectionPage.style.right = '0';
        }
        else {
            desktopMenu.style.display = 'flex';
            collectionPage.style.right = '-100%';
        }
    };
    let featureSlide = () => {
        if (desktopMenu.style.display == 'flex' && featuresPage.style.right == '-100%') {
            desktopMenu.style.display = 'none';
            featuresPage.style.right = '0';
        }
        else {
            desktopMenu.style.display = 'flex';
            featuresPage.style.right = '-100%';
        }
    };
    let clickListeners = () => {
        collectionBtn.forEach(collectionButton => {
            collectionButton.addEventListener('click', () => {
                collectionSlide();
            });
        });
        featuresBtn.forEach(featuresButton => {
            featuresButton.addEventListener('click', () => {
                featureSlide();
            });
        });
    };
    backBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            if (desktopMenu.style.display = 'none') {
                collectionPage.style.right = '-100%';
                featuresPage.style.right = '-100%';
                setTimeout(() => {
                    desktopMenu.style.display = 'flex';
                }, 400);
            }
        });
    });
    clickListeners();
};
innerMenuSlide();
