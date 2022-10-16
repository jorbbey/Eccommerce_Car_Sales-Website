// heading toggle for mobile view
const mobileCollectionNav = () => {

     const bar = document.getElementById('collection-head') as HTMLDivElement;
     const btn = document.querySelector('.icon') as HTMLDivElement;

     btn.style.display = 'block';
     btn.addEventListener('click', () => {
          bar.style.display = 'flex';
          bar.style.width = '100%';
          bar.style.height = '100px';
          setTimeout(() => {
               btn.style.display == 'block' ? btn.style.display = 'none' : btn.style.display = 'block';
          }, 500)
     });
}
mobileCollectionNav();

// Collection Pages

const collectionPages = () => {
     const genPage = Array.from(document.querySelectorAll<HTMLElement>('.collection-box'));
     const popularBtn = Array.from(document.querySelectorAll<HTMLElement>('#popular-btn'));
     const largeBtn = document.getElementById('large-btn') as HTMLLIElement;
     const smallBtn = document.getElementById('small-btn') as HTMLLIElement;
     const exclusiveBtn = document.getElementById('exclusive-btn') as HTMLLIElement;
     const popularPage = Array.from(document.querySelectorAll<HTMLLIElement>('#popular'));
     const largePage = document.getElementById('large') as HTMLDivElement;
     const smallPage = document.getElementById('small') as HTMLDivElement;
     const exclusivePage = document.getElementById('exclusive') as HTMLDivElement;

     genPage.forEach(page => {
          page.style.display = 'none';
     })

     popularPage.forEach(popular => {
          popular.style.display = 'flex';
     })


     let showPopularPage = () => {
          popularBtn.forEach(btn => {
               btn.addEventListener('click', () => {
                    genPage.forEach(page => {
                         page.style.display = 'none';
                    })
                    popularPage.forEach(popular => {
                         popular.style.display = 'flex';
                    })
               })
          })
     };

     let showLargePage = () => {
          largeBtn.addEventListener('click', () => {
               genPage.forEach(page => {
                    page.style.display = 'none';
               })
               largePage.style.display = 'flex';
          })
     };


     let showSmallPage = () => {
          smallBtn.addEventListener('click', () => {
               genPage.forEach(page => {
                    page.style.display = 'none';
               })
               smallPage.style.display = 'flex';
          })
     };


     let showExclusivePage = () => {
          exclusiveBtn.addEventListener('click', () => {
               genPage.forEach(page => {
                    page.style.display = 'none';
               })
               exclusivePage.style.display = 'flex';
          })
     };



     showPopularPage();
     showLargePage();
     showSmallPage();
     showExclusivePage();

};

collectionPages();
