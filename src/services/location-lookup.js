const APP_ID = import.meta.env.VITE_API_LOCATION_KEY
const LOCATION_BASE_URL = 'https://extreme-ip-lookup.com/json'


export async function getLocation() {
  const url = `${LOCATION_BASE_URL}?key=${APP_ID}`;
  const response = await fetch(url);
  const data = await response.json();
  return data?.city || '';
}
