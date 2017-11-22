[![Build Status](https://travis-ci.org/Omeglast/weather-client.svg?branch=master)](https://travis-ci.org/Omeglast/weather-client)

# OmeGlast weather client

This repository is part of the [OmeGlast](https://github.com/Omeglast/Omeglast) project. This is a client that will retrieve weather "real time" data in defined interval and push them to the OmeGlast Server.

# Docker usage

This project is supposed to be use with it's docker image.

## Docker-compose

To see a complete example of usage of this image in a docker-compose file, you should have a look at the [all-in-one repository](https://github.com/Omeglast/Omeglast).

# Environment variables

- `HUMIDITY_TOPIC`: topic in the MQTT server used to publish current weather humidity
- `MQTT_HOST`: hostname of the OmeGlast MQTT server
- `MQTT_PORT`: port of the OmeGlast MQTT server
- `PUSH_INTERVAL`: interval of time (in milliseconds) when client will retrieve and push new data
- `TEMPERATURE_TOPIC`: topic in the MQTT server used to publish current weather temperature
- `WEATHER_LOCATION`: Location which weather should be retrieved

Topic are used to store the data in the server database. Topic should be in the form of `sensor/weather/location/temperature` and should always start with `sensor/..`.
