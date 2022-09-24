function activeTab(event){
  const tabs = document.querySelectorAll('.tabs__item');
  const tab = event.currentTarget;
  tabs.forEach(value => value.classList.remove('tabs__item--active'));
  tab.classList.add('tabs__item--active');
}