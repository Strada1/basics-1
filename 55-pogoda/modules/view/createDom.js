const createElement = (teg, classForTeg = null, valueTeg = null, atributeTeg = null, atributeValue = null,) => {

   const element = document.createElement(teg);

   if (classForTeg && !Array.isArray(classForTeg)) {
      element.classList.add(classForTeg)
   } else if (Array.isArray(classForTeg)) {
      classForTeg.forEach(currentClass => {
         element.classList.add(currentClass)
      })
   }

   valueTeg ? element.textContent = valueTeg : '';
   atributeTeg ? element.setAttribute(atributeTeg, atributeValue) : null;
   return element;
}

export { createElement }