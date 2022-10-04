// inner menu page
const innerMenuSlide = () => {

    const desktopMenu = document.querySelector('.menu-bar');
    const mobileMenu = document.querySelector('.mobile-menu');
    const collectionBtn = document.querySelectorAll('#collection-items');
    const featuresBtn = document.querySelectorAll('#features-items');
    const collectionPage = document.querySelector('.Collection');
    const featuresPage = document.querySelector('.Features');
    const backBtn = document.querySelectorAll('#inner-back-btn');
    
    collectionPage.style.right = '-100%';
    featuresPage.style.right = '-100%'; 
    
    let collectionSlide = () => {
        if (desktopMenu.style.display == 'flex' && collectionPage.style.right == '-100%' ) {
            desktopMenu.style.display = 'none';
            collectionPage.style.right = '0';
        } else {
            desktopMenu.style.display = 'flex';
            collectionPage.style.right = '-100%';
        }
    };
    
    let featureSlide = () => {
        if (desktopMenu.style.display == 'flex' && featuresPage.style.right == '-100%' ) {
            desktopMenu.style.display = 'none';
            featuresPage.style.right = '0';
        } else {
            desktopMenu.style.display = 'flex';
            featuresPage.style.right = '-100%';
        }
    };
    
    let clickListeners = () => {
        collectionBtn.forEach(collectionButton =>{
        collectionButton.addEventListener('click', ()=> {
            collectionSlide();
        });   
        }) 
    
        featuresBtn.forEach(featuresButton =>{
            featuresButton.addEventListener('click', ()=> {
                featureSlide();
            });   
            })
    };
    
    backBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
        if (desktopMenu.style.display = 'none') {
            collectionPage.style.right = '-100%';
            featuresPage.style.right = '-100%';
    
            setTimeout(()=> {
            desktopMenu.style.display = 'flex';
            }, 400);
        }
    });
    })
    
    clickListeners();
    };
    
    innerMenuSlide();
    
    