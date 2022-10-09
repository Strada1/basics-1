export const dateToHHMM = (num) => {
    let date = new Date(num);
    // let str = date.toLocaleTimeString();
    return date.getHours() + ':' + date.getMinutes();
}