let userLatitude;
let userLongitude;
let p;

const getUserPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (p) => {
        resolve(p.coords);
      },
      (e) => {
        reject(e);
      }
    );
  });
};

async function getData(lati, long) {
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${long}&hourly=temperature_2m&models=metno_seamless&current=temperature_2m,is_day`;
  console.log(url);
  let response = await fetch(url);

  let result = await response.json();
  console.log(result);
}

async function getWeather() {
  try {
    const coords = await getUserPosition();
    userLatitude = coords.latitude;
    userLongitude = coords.longitude;
    getData(userLatitude, userLongitude);
  } catch (e) {
    console.log(e);
  }
}

getWeather();
