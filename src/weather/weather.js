import weather from 'weather-js';


class Weather {
  constructor({ logger, location }) {
    this.logger = logger;
    this.query = {
      search: location,
      degreeType: 'C',
    };
  }

  find(cb) {
    weather.find(this.query, (err, res) => {
      if (err) return cb(err);
      // this.logger.info('Weather found', res[0].current);
      return cb(null, res[0].current);
    });
  }
}

export default Weather;
