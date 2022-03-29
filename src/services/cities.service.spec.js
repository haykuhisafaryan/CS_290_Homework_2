const rewire = require("rewire");
const { faker } = require("@faker-js/faker");
const cityServiceModule = rewire("./cities.service");
const chai = require("chai");
const chaiAsPromise = require("chai-as-promised");
chai.use(chaiAsPromise);
chai.should();

const validZipCode = faker.address.zipCode();
const notValidZipCode = "111111111";
const fake = {
  [validZipCode]: {
    "post code": validZipCode,
    country: faker.address.country(),
    "country abbreviation": faker.address.countryCode(),
    places: [
      {
        "place name": faker.address.city(),
        longitude: faker.address.longitude(),
        state: faker.address.state(),
        "state abbreviation": faker.address.stateAbbr(),
        latitude: faker.address.latitude(),
      },
    ],
  },
};

const generatedResult = {
  getCityDataByZipCode: function (zipCode) {
    return fake[zipCode];
  },
};

cityServiceModule.__set__("citiesRepository", generatedResult);

describe("Test the function getCityByZipCode of citiesService", function () {
  const resultTemplate =
    fake[validZipCode].places[0]["place name"] +
    ", " +
    fake[validZipCode].places[0]["state abbreviation"] +
    ", " +
    fake[validZipCode].country;

  it("Testing with correct data", function () {
    return cityServiceModule
      .getCityByZipCode(validZipCode)
      .should.be.eventually.equal(resultTemplate);
  });

  it("Testing with correct data", function () {
    return cityServiceModule
      .getCityByZipCode(notValidZipCode)
      .should.eventually.be.rejectedWith("No cities found!");
  });
});
