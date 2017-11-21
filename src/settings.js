/**
 * Application settings
 */

export default {
  mqtt: {
    host: process.env.MQTT_HOST || 'mqtt_server',
    port: process.env.MQTT_PORT || 1883,
    topic: {
      temperature: process.env.TEMPERATURE_TOPIC || 'sensor/weather/paris/temperature',
      humidity: process.env.HUMIDITY_TOPIC || 'sensor/weather/paris/humidity',
    },
  },
  weather: {
    location: process.env.WEATHER_LOCATION || 'Paris, FR',
  },
  interval: process.env.PUSH_INTERVAL || (5 * 60 * 1000), // 5 minutes in ms
};
