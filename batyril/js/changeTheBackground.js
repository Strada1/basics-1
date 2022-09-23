 export function changeTheBackground(gender, backgroundPlace) {
  if (gender === 'male') {
    backgroundPlace.style.background = 'linear-gradient(90deg, rgba(69,112,252,1) 0%,' +
       ' rgba(253,29,29,0.34409219009869574) 50%, rgba(69,112,252,1) 100%)';
  }
  if (gender === 'female') {
    backgroundPlace.style.background = ' linear-gradient(90deg, rgba(180,58,123,1) 0%,' +
       ' rgba(253,29,29,0.34409219009869574) 50%, rgba(180,58,123,1) 100%)';
  }
 }
