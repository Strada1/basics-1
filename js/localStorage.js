export const stringToArrayer = (str) => {
    return str.split(',');
}
export const localSave = (attr, value) => {
    localStorage.setItem(attr, value);  
}
export const setCurrentCity = (city) => {
    localStorage.setItem('currentCity', city);
}