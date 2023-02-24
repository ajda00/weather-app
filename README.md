# Single-Page Application for Weather Information
This is a single-page application (SPA) that allows users to obtain the current weather conditions for any city. The application has the following features:

- A search bar where users can input the name of the city they are interested in knowing the weather conditions.
- Display of weather information for the currently selected city.
- The application keeps track of the last five successful search queries, and displays them as clickable buttons.
- Clicking on one of the previous search queries will populate the search bar with the corresponding city name and display the weather information for that city.

The weather information is provided in metric units (Celsius). The following information is displayed:

- Temperature
- Feels like
- Minimum temperature
- Maximum temperature
- Humidity

# Technologies Used
This application was built using the Vue 3 + Vite + Tailwind framework.

# Getting Started
To run the application:
```
npm run dev
``` 
Using an already provided APP ID simplifies the testing process and prevents issues from using an invalid key. It's an acceptable approach as long as it's not used for production purposes.

# Usage
To use the application, simply type the name of the city you are interested in into the search bar and press "Enter" or click the "Search" button. The application will display the weather information for the specified city.

The last five successful search queries will be displayed as clickable buttons. Clicking on one of these buttons will populate the search bar with the corresponding city name and display the weather information for that city.

