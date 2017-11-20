/**
 * Application settings
 */

export default {
  mqtt: {
    host: process.env.MQTT_HOST || 'mqtt_server',
    port: process.env.MQTT_PORT || 1883
  },
  weather: {
    location: process.env.WEATHER_LOCATION || 'Paris, FR',
    interval: process.env.PUSH_INTERVAL || 5000
  }
}
