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
  let url = `https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${long}&hourly=temperature_2m,cloud_cover,rain,precipitation,precipitation_probability,wind_speed_10m&current=temperature_2m,is_day,rain,showers,snowfall,cloud_cover,precipitation,relative_humidity_2m,apparent_temperature,wind_speed_10m,wind_direction_10m,wind_gusts_10m,weather_code`;
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
    getData(21.989322, 96.068303);
  } catch (e) {
    console.log(e);
  }
}

getWeather();
