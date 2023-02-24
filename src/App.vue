<template>
  <h1 class="text-neutral-900 text-center">Weather App</h1>
  <div class="md:flex py-16 md:space-x-12 w-full">
    <div class="md:w-96">
      <input
        class="appearance-none block w-full px-5 py-3 border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none text-sm md:text-base leading-6 font-normal"
        type="text"
        autocomplete="off"
        placeholder="Type a city name..."
        v-model="query"
        @keypress.enter="loadLocationWeather(query)"
      />
      <button class="my-3" @click="loadLocationWeather(query)">Search</button>

      <div v-if="errorMessage">{{ errorMessage }}</div>
      <div class="pt-6">
        <h3 class="pb-4 text-base text-neutral-700">LATEST SEARCHES</h3>
        <h4 class="text-neutral-600" v-if="!weatherDataHistory.length">
          No previous searches yet.
        </h4>
        <div
          class="py-1"
          v-for="weatherData in weatherDataHistory"
          @click="loadLocationWeather(weatherData.name)"
        >
          <div
            class="bg-neutral-50 hover:bg-neutral-100 shadow-sm cursor-pointer py-2 px-4 rounded-md flex justify-between"
          >
            <h4 class="text-lg">{{ weatherData.name }}</h4>
            <h5 class="text-neutral-600">{{ Math.round(weatherData.main.temp) }}°</h5>
          </div>
        </div>
      </div>
    </div>
    <WeatherCard v-if="weatherData" :weatherData="weatherData"></WeatherCard>
  </div>
</template>

<script setup>
import { ref } from "vue";
import WeatherCard from "/src/components/WeatherCard.vue";
import { getLocationWeather } from "/src/services/open-weather";
import { getLocation } from "/src/services/location-lookup";

const query = ref("");
const weatherDataHistory = ref([]);
const weatherData = ref();
const errorMessage = ref();

async function getCurrentLocation() {
  query.value = await getLocation();
  loadLocationWeather(query.value)
}
getCurrentLocation()

function addToWeatherDataHistory(weatherData) {
  const isDuplicate = weatherDataHistory.value.some(
    ({ name }) => name === weatherData.name
  );

  if (!isDuplicate) {
    weatherDataHistory.value.push(weatherData);
  }

  if (weatherDataHistory.value.length >= 5) {
    weatherDataHistory.value.shift();
  }
}

async function loadLocationWeather(queryLocation) {
  try {
    query.value = queryLocation;
    const data = await getLocationWeather(queryLocation);
    weatherData.value = data;
    addToWeatherDataHistory(data);
    errorMessage.value = undefined;
  } catch (error) {
    if (error.message === "404") {
      errorMessage.value = "No such city found";
    } else errorMessage.value = "There was an error processing your request."
  }
}
</script>
