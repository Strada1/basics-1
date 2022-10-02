export const icon = (description) => {
  if (description === 'overcast clouds' || description === 'broken clouds') {
    return 'overcastClouds.png';
  } else if (description === 'scattered clouds' || description === 'few clouds') {
    return 'cloud.png';
  } else if (description.includes('rain')) {
    return 'rain.png';
  } else if (description === 'clear sky') {
    return 'sun.png';
  } else if (description.includes('snow')) {
    return 'snow.png';
  }
};
