export function saveFavoriteCities (list){
    localStorage.setItem("cityName", JSON.stringify(list));
}

export function getFavoriteCities(){
    let favoriteCity = localStorage.getItem("cityName");
    if(!favoriteCity){
        return [];
    }
    console.log(favoriteCity);
    return (JSON.parse(favoriteCity));
}