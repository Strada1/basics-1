const tabs = document.querySelectorAll('.tabs-block');
const tabsBtn = document.querySelectorAll('.tabs__btn');

function tabsHandler(currentbtn) {
   const oldBtn = document.querySelector('.tabs__btn.active');
   const targetId = currentbtn.dataset.tabs;

   oldBtn.classList.remove('active');
   currentbtn.classList.add('active');
   tabs.forEach((tab) => {
      if (tab.id === targetId) {
         tab.classList.add('active');
      } else {
         tab.classList.remove('active')
      }
   });
}

tabsBtn.forEach(btn => {
   btn.addEventListener('click', e => tabsHandler(e.target))
})

export { }


