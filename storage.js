
let city = new Set(localGet());
let CITYNAME = localGetNow()


  function localSet() {
    localStorage.setItem("likedCity", JSON.stringify([...city]));
    localStorage.setItem("CityNow", JSON.stringify(CITYNAME));
  }

  function localGet() {
    return JSON.parse(localStorage.getItem("likedCity"));
    }
        

  function localGetNow() {
    if (localStorage.getItem("CityNow") !== null) {
      return JSON.parse(localStorage.getItem("CityNow"));
    } else {
      return {};
    }
  }

  export {city, localSet, CITYNAME}
