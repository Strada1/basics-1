import { popupMessage } from '../modules/showMessage/showMessage.js';

const input = document.querySelector('.app__input');
const form = document.querySelector('.app__form');
const resultList = document.querySelector('.show-result');
const serverUrl = 'https://api.genderize.io';

const generateUrl = (firstName) => `${serverUrl}?name=${firstName}`;
const isInputValid = (name) => !!name && !!name.trim && !!name.trim();
const getGender = (name) => {
   const url = generateUrl(name.trim());
   return fetch(url).then(result => result.json());
}

const showAnswer = (name, gender) => {
   if (!gender) {
      throw new Error(`Имя "${name}" не определно, попробуйте имя указать на Английском!`);
   }
   
   const p = document.createElement('p');
   p.innerText = `${name} is ${gender}!`;
   resultList.append(p);
}

const hendleSubmit = async (e) => {
   e.preventDefault();
   const inputValue = input.value;
   
   try {            
      if (!isInputValid(inputValue)) {
         throw new Error('Укажите имя!');
      }
      const { name, gender } = await getGender(inputValue);
      showAnswer(name, gender);
   } catch (error) {
      popupMessage(error.message, error.name);
   }

   input.value = '';
}

form.addEventListener('submit', hendleSubmit);
