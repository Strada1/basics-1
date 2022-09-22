import { popupMessage } from '../modules/showMessage/showMessage.js';

const input = document.querySelector('.app__input');
const form = document.querySelector('.app__form');
const resultList = document.querySelector('.show-result');

form.addEventListener('submit', (e) => {
   e.preventDefault();
   getGender(input.value)
   input.value = '';
})

function getGender(name) {
   try {
      if (!name.trim()) {
         throw new Error('Укажите имя!');
      }
      const url = finalUrl(name);
      const resultGender = fetch(url);
      resultGender.then(result => result.json())
         .then(result => {
            createGenderAnswer(result.name, result.gender);
         });
   } catch (error) {
      popupMessage(error.message, error.name);
   }
}

function finalUrl(firstName) {
   const serverUrl = 'https://api.genderize.io';
   return `${serverUrl}?name=${firstName}`;
}

function createGenderAnswer(name, gender) {
   try {
      if (!gender) {
         throw new Error(`Имя "${name}" не определно, попробуйте имя указать на Английском!`);
      }
      const p = document.createElement('p');
      p.innerText = `${name} is ${gender}!`;
      resultList.append(p);
   } catch (error) {
      popupMessage(error.message, error.name);
   }
}