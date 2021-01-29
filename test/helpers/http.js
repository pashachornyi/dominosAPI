const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
require('dotenv').config()

class HttpClient {
    get(path, parameters = null, token = '1') {
        return chai.request(process.env.URL)
            .get(path)
            .query(parameters)
            .set("Authorization", "Bearer " + token)
    }
    getToken(username = process.env.USERNAME, password = process.env.PASSWORD) {
        return chai.request(process.env.URL)
            .post('/auth/login')
            .send({
                username: username,
                password: password
            })
    }
    post(path, parameters, token) {
        return chai.request(process.env.URL)
            .post(path)
            .query(parameters)
            .set("Authorization", "Bearer " + token)
    }
}

module.exports = new HttpClient();