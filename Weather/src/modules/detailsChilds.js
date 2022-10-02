const details = document.querySelector('#tab_02');

const detailsComponents = ['Temperature: ', 'Feels like: ', 'Weather: ', 'Sunrise: ', 'Sunset: '];

export const detailsChilds = (name, deg, degFeels, desq, sunrise, sunset) => {
  const values = [deg, degFeels, desq, sunrise, sunset];
  const h1 = document.createElement('h1');
  const ul = document.createElement('ul');
  ul.setAttribute('class', 'details');
  const nameNode = document.createTextNode(name);

  details.replaceChildren();

  h1.appendChild(nameNode);
  for (let i = 0; i < detailsComponents.length; i++) {
    const detail = detailsComponents[i] + values[i];
    const detailNode = document.createTextNode(detail);
    const li = document.createElement('li');
    li.setAttribute('class', 'detail');
    li.appendChild(detailNode);
    ul.appendChild(li);
  }

  details.appendChild(h1);
  details.appendChild(ul);
};
