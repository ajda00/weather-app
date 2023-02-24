<template>
  <div class="md:w-96 mt-6 md:mt-0">
    <div class="flex justify-between space-x-4">
      <div>
        <h3 class="text-3xl font-bold text-neutral-900">{{ weatherData.name }}</h3>
        <h2 class="text-6xl font-bold text-neutral-900 py-6 text-center">
          {{ Math.round(weatherData.main.temp) }}°
        </h2>
      </div>
      <img
        class="weather-icon"
        :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
        alt="weather image"
      />
    </div>
    <hr class="solid text-neutral-800 py-3" />
    <h4 class="text-xl text-neutral-900">Air conditions</h4>
    <h4 class="text-neutral-800">
      Real feel: {{ Math.round(weatherData.main.feels_like) }}°C
    </h4>
    <h4 class="text-neutral-800">
      Min: {{ Math.round(weatherData.main.temp_min) }}° Max:
      {{ Math.round(weatherData.main.temp_max) }}°
    </h4>
    <h4 class="text-neutral-800">Humidity: {{ weatherData.main.humidity }} %</h4>
  </div>
</template>

<script setup>
defineProps({
  weatherData: {
    type: String,
    default: "",
  },
});
</script>
