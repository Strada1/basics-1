export function CreateAndSaveElemInNotes(block) {
  let newRes = document.createElement('li');
  newRes.className = 'result';
  block.append(newRes);
  newRes.addEventListener('click', e => {
    e.target.remove();
  });

  return newRes;
}
