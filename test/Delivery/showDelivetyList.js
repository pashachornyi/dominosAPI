const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Show delivery list', () => {
    beforeEach(async () => {
        token = await chai.request(process.env.URL)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Show list', () => {
        chai.request(process.env.URL)
            .get('/delivery')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({
                perPage: 10,
                page: 1
            })
            .then((result) => {
                helper.assert200({}, result.body)
            })
    })
    it('Show list (unauthorized)', () => {
        chai.request(process.env.URL)
            .get('/delivery')
            .send({
                perPage: 10,
                page: 1
            })
            .then((result) => {
                helper.assert401(result.body)
            })
    })
});
