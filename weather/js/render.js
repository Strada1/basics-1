import { showError } from './error.js';
import {
  blockNowTemplate,
  locationItemTemplate,
  blockDetailsTemplate
} from './templates.js';
import { storage } from './local-storage.js';
import {
  getData,
  getDataForNowBlock,
  getLocationName,
  getDataForDetails
} from './get-data.js';
import {
  addLocation,
  deleteLocation,
  getLocationsList,
  findLocation
} from './added-locations.js';


const NAVIGATION_ACTIVE_LINK_CLASS_NAME = 'weather__nav-link--active';
const ADD_LOCATION_ACTIVE_BUTTON_CLASS_NAME = 'now-block__add--active';

const searchFormElement = document.querySelector('.weather__search-form');
const searchFieldElement = searchFormElement.querySelector('.weather__search-input');
const navigationElement = document.querySelector('.weather__nav');
const blockNowElement = document.querySelector('.now-block');
const blockDetailsElement = document.querySelector('.details-block');


// Хэндлер нажатия на вкладку
const onTabClick = (e) => {
  const currentLink = e.target;

  if (!currentLink.classList.contains(NAVIGATION_ACTIVE_LINK_CLASS_NAME)) {
    for(let link of navigationElement.children) {
      link.classList.remove(NAVIGATION_ACTIVE_LINK_CLASS_NAME);
    }

    currentLink.classList.add(NAVIGATION_ACTIVE_LINK_CLASS_NAME);
  }
};


// Удаление состояния --active для кнопки "Добавить в избранные"
const removeActiveClassFromAddButton = (buttonElement) => {
  buttonElement.classList.remove(ADD_LOCATION_ACTIVE_BUTTON_CLASS_NAME);
};


// Установка состояния --active для кнопки "Добавить в избанные"
const setActiveClassToAddButton = (buttonElement) => {
  buttonElement.classList.add(ADD_LOCATION_ACTIVE_BUTTON_CLASS_NAME);
};


// Хэндлер нажатия на ссылку локации в списке добавленных локаций
const onLocationLinkClick = (locationName) => {
  getData(locationName, onSuccessGetData, showError);
}


// Хэндлер нажатия кнопки удаления локации из списка добавленных локаций
const onLocationDeleteClick = (locationName) => {
  deleteLocation(locationName);
  renderLocations();

  const nowBlockTitleElement = document.querySelector('.now-block__title');
  const addButtonElement = document.querySelector('.now-block__add');
  const nowBlockTitle = nowBlockTitleElement.textContent;

  if (nowBlockTitle === locationName) {
    removeActiveClassFromAddButton(addButtonElement);
  }
};


// Хэндлер нажатия на список локаций.
// - Проверяет, на что нажали: название локации или кнопку "Удалить"
// - В зависимости от цели, вызывает функцию для нужного действия
const onLocationsListClick = (e) => {
  const clickedElement = e.target;

  if (clickedElement.classList.contains('weather__locations-link')) {
    e.preventDefault();
    const locationName = clickedElement.textContent;
    onLocationLinkClick(locationName);
    return;
  }

  if (clickedElement.classList.contains('weather__locations-item-delete')) {
    const locationName = clickedElement.dataset.name;
    onLocationDeleteClick(locationName);
    return;
  }
};


// Получение одного элемента списка добавленных локаций
const getLocationItem = (locationName) => {
  const locationItemElement = locationItemTemplate.cloneNode(true);
  const locationLinkElement = locationItemElement.querySelector('.weather__locations-link');
  const deleteButtonElement = locationItemElement.querySelector('.weather__locations-item-delete');

  locationLinkElement.textContent = locationName;
  deleteButtonElement.dataset.name = locationName;

  return locationItemElement;
};


// Получение фрагмента с элементами списка добавленных локаций
const getLocationsItemsFragment = () => {
  const locationsItemsFragment = document.createDocumentFragment();

  const locationsList = getLocationsList();

  if (locationsList && locationsList.length > 0) {
    locationsList.forEach((location) => {
      locationsItemsFragment.append(getLocationItem(location));
    });
  }

  return locationsItemsFragment;
};


// Рендер блока с избранными локациями
const renderLocations = () => {
  const locationsListElement = document.querySelector('.weather__locations-list');
  const newLocationsListElement = locationsListElement.cloneNode(false);
  const locationsItemsFragment = getLocationsItemsFragment();

  newLocationsListElement.append(locationsItemsFragment);
  newLocationsListElement.addEventListener('click', onLocationsListClick);

  locationsListElement.removeEventListener('click', onLocationsListClick);
  locationsListElement.replaceWith(newLocationsListElement);
};


const renderDetailsBlock = ({
  cityName,
  temperature,
  feelsLike,
  description,
  sunrise,
  sunset
}) => {
  const wrapperElement = blockDetailsTemplate.cloneNode(true);

  const titleElement = wrapperElement.querySelector('.details-block__title');
  const temperatureElement = wrapperElement.querySelector('.details-block__temperature span');
  const feelsLikeElement = wrapperElement.querySelector('.details-block__feels-like span');
  const descriptionElement = wrapperElement.querySelector('.details-block__weather span');
  const sunriseElement = wrapperElement.querySelector('.details-block__sunrise span');
  const sunsetElement = wrapperElement.querySelector('.details-block__sunset span');

  titleElement.textContent = cityName;
  temperatureElement.textContent = temperature;
  feelsLikeElement.textContent = feelsLike;
  descriptionElement.textContent = description;
  sunriseElement.textContent = new Date(sunrise * 1000).toLocaleTimeString('en-GB');
  sunsetElement.textContent = new Date(sunset * 1000).toLocaleTimeString('en-GB');

  blockDetailsElement
    .querySelector('.details-block__wrapper')
    .replaceWith(wrapperElement);
};


// Хэндлер нажатия на кнопку "Добавить в избранное"
const onAddButtonClick = (name) => function (e) {
  const buttonElement = this;

  if (!buttonElement.classList.contains(ADD_LOCATION_ACTIVE_BUTTON_CLASS_NAME)) {
    setActiveClassToAddButton(buttonElement);
    addLocation(name);
  } else {
    removeActiveClassFromAddButton(buttonElement);
    deleteLocation(name);
  }

  renderLocations();
};


// Рендер вкладки NOW
const renderNowBlock = ({ temperature, cityName, iconSource, weatherDescription }) => {
  const oldTitleElement = document.querySelector('.now-block__title');
  if (oldTitleElement && oldTitleElement.textContent === cityName) {
    return;
  }

  const wrapperElement = blockNowTemplate.cloneNode(true);

  const temperatureElement = wrapperElement.querySelector('.now-block__temperature span');
  const titleElement = wrapperElement.querySelector('.now-block__title');
  const weatherIconElement = wrapperElement.querySelector('.now-block__image');
  const addButtonElement = wrapperElement.querySelector('.now-block__add');

  temperatureElement.textContent = temperature;
  titleElement.textContent = cityName;
  weatherIconElement.src = iconSource;
  weatherIconElement.alt = weatherDescription;
  addButtonElement.dataset.name = cityName;

  if (findLocation(cityName)) {
    setActiveClassToAddButton(addButtonElement);
  }

  addButtonElement.addEventListener('click', onAddButtonClick(cityName));

  blockNowElement
    .querySelector('.now-block__wrapper')
    .replaceWith(wrapperElement);
};


// Действия при успешном получении данных с сервера
const onSuccessGetData = (data) => {
  const dataForNowBlock = getDataForNowBlock(data);
  const dataForDetailsBlock = getDataForDetails(data);
  const locationName = getLocationName(data);

  renderNowBlock(dataForNowBlock);
  renderDetailsBlock(dataForDetailsBlock);
  storage.saveCurrentLocation(locationName);
};


// Хэндлер отправки данных в форме поиска локации
const onSearchFormSubmit = (e) => {
  e.preventDefault();
  const cityName = searchFieldElement.value;

  if (cityName.trim() !== '') {
    getData(cityName, onSuccessGetData, showError);
    e.target.reset();
  }
};


// Установка события Submit формы поиска локации
const setSearchForm = () => searchFormElement.addEventListener('submit', onSearchFormSubmit);

// Настройка перекючения вкладок
const setTabs = () => {
  const firstTabElement = navigationElement.querySelector('#now-link');
  firstTabElement.classList.add(NAVIGATION_ACTIVE_LINK_CLASS_NAME);
  navigationElement.addEventListener('click', onTabClick);
};


const initialRender = () => {
  setTabs();
  setSearchForm();
  renderLocations();

  const currentLocationName = storage.getCurrentLocation();
  if (currentLocationName) {
    getData(currentLocationName, onSuccessGetData, showError);
  }
};


export { renderNowBlock, initialRender };
