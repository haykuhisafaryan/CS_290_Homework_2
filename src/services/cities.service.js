const NotFoundError = require("../errors/not-found.error");
const citiesRepository = require("../repositories/cities.repository");

module.exports = {
  async getCityByZipCode(zipCode) {
    let result;

    try {
      result = await citiesRepository.getCityDataByZipCode(zipCode);
    } catch (err) {
      throw new NotFoundError("No cities found!");
    }

    if (!result) {
      throw new NotFoundError("No cities found!");
    }

    return (
      result.places[0]["place name"] +
      ", " +
      result.places[0]["state abbreviation"] +
      ", " +
      result.country
    );
  },
};
