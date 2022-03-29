const axios = require('axios');

module.exports = {
    async getCityDataByZipCode(zipCode) {
        const result = await axios.get(`https://api.zippopotam.us/us/${zipCode}`)
        return result.data;
    }
}