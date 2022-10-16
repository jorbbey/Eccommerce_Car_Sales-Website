const toggleFAQsMenu = () => {
     const firstBtn = document.getElementById('first-btn') as HTMLDivElement;
     const secondBtn = document.getElementById('second-btn') as HTMLDivElement;
     const thirdBtn = document.getElementById('third-btn') as HTMLDivElement;
     const menu = Array.from(document.querySelectorAll<HTMLElement>('.question-text'));
     const firstMenu = document.getElementById('first-text') as HTMLDivElement;
     const secondMenu = document.getElementById('second-text') as HTMLDivElement;
     const thirdMenu = document.getElementById('third-text') as HTMLDivElement;

     menu.forEach(item => {
          item.style.display = 'none';
     });

     const firstMenuCondition = () => {
          if (firstMenu.style.display == 'none') {
               firstMenu.style.display = 'block';
          } else {
               firstMenu.style.display = 'none';
          }
     };

     const secondMenuCondition = () => {

          if (secondMenu.style.display == 'none') {
               secondMenu.style.display = 'block';
          } else {
               secondMenu.style.display = 'none';
          }
     };

     const thirdMenuCondition = () => {

          if (thirdMenu.style.display == 'none') {
               thirdMenu.style.display = 'block';
          } else {
               thirdMenu.style.display = 'none';
          }
     }

     const eventListeners = () => {
          firstBtn.addEventListener('click', () => {
               firstBtn.classList.toggle('open');
               firstMenuCondition();
          });

          secondBtn.addEventListener('click', () => {
               secondBtn.classList.toggle('open');
               secondMenuCondition();
          });

          thirdBtn.addEventListener('click', () => {
               thirdBtn.classList.toggle('open');
               thirdMenuCondition();
          });

     };

     eventListeners();

};

toggleFAQsMenu();

     

