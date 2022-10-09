export const favoriteRender = (arr) => {
    const nest = document.querySelector('.locations__list');
    nest.innerHTML = '';
    for (let item of arr) {
        let li = document.createElement('li');
        li.classList.add('locations__item');
        let cityBtn = document.createElement('button');
        cityBtn.classList.add('locations__button');
        cityBtn.innerHTML = item;
        let cityRemoveBtn = document.createElement('button');
        cityRemoveBtn.classList.add('locations__item-close-btn');
        let cityRemoveImg = document.createElement('img');
        cityRemoveImg.setAttribute('alt', 'close');
        cityRemoveImg.classList.add('locations__item-close-img');
        cityRemoveImg.src = './img/icons/cross.svg';
        cityRemoveBtn.append(cityRemoveImg);
        li.append(cityBtn);
        li.append(cityRemoveBtn);
        nest.append(li);
    }
}
export const favouriteAdd =  (arr, elem) => {
    if (!arr.includes(elem)) {
        arr.push(elem)
    }
}
export const favouriteRemove = (arr, elem) => {
    arr.find((item,index) => {
        if (item == elem) {
            arr.splice(index,1);
        }
    })
}