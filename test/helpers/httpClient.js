const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
require('dotenv').config()

class httpClient {

    post(path, data, headers = ["", ""]) {
        return chai.request(process.env.URL)
            .post(path)
            .send(data)
            .set(headers)
    }
}

module.exports = new httpClient();