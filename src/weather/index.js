import mqtt from 'mqtt';
import Weather from 'weather/weather';
import Logger from 'weather/logger';
import settings from 'settings';

const logger = new Logger();
const weather = new Weather({ logger, location: settings.weather.location });
const mqttClient = mqtt.connect(`mqtt://${settings.mqtt.host}:${settings.mqtt.port}`);

mqttClient.on('connect', () => {
  logger.info(`MQTT Weather client ${settings.weather.location} connected`);
});

// Loading current weather and publish
setInterval(
  () => weather.find((err, res) => {
    if (err) {
      return logger.error(err.message, { err });
    }
    if (settings.mqtt.topic.temperature) {
      logger.debug(`Publish current temperature: ${res.temperature}`, { res });
      mqttClient.publish(
        settings.mqtt.topic.temperature,
        JSON.stringify({ value: res.temperature }),
      );
    }
    if (settings.mqtt.topic.humidity) {
      logger.debug(`Publish current humidity: ${res.humidity}`, { res });
      mqttClient.publish(
        settings.mqtt.topic.humidity,
        JSON.stringify({ value: res.humidity }),
      );
    }
    return true;
  }),
  settings.interval,
);
