const { getCityDataByZipCode } = require("./cities.repository");

const axios = require("axios");
const sinon = require("sinon");
const chai = require("chai");
chai.use(require("sinon-chai"));

describe("Unit test for getCityDataByZipCode()", function () {
  it("axios.get stubbing test for exactly one time", function () {
    const stub = sinon.stub(axios, "get").resolves(getCityDataByZipCode(91234));
    chai.expect(stub).have.been.calledOnce;
  });
});
