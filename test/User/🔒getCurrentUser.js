const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://dominos-backend.herokuapp.com/api/v1"
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Get current user', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/auth/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Getting user parameters', () => {
        chai.request(url)
            .get('/user/current')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({})
            .then((result) => {
                helper.assert204({}, result.body)
            })
    })
    it('Getting user parameters (Unauthorized)', () => {
        chai.request(url)
            .get('/user/current')
            .send({})
            .then((response) => {
                helper.assert401(response.body)
            })
    })
})

