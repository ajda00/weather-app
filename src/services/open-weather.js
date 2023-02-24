const APP_ID = import.meta.env.VITE_API_WEATHER_KEY
const OPEN_WEATHER_BASE_URL = 'https://api.openweathermap.org'

export async function getLocationWeather(queryLocation) {
  const url = `${OPEN_WEATHER_BASE_URL}/data/2.5/weather?q=${queryLocation}&units=metric&APPID=${APP_ID}`;
  const response = await fetch(url);
  const data = await response.json();
  if (!response.ok) {
       throw new Error(data.cod);
  } else {
      return data
  }
}
