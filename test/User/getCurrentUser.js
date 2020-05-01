const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Get current user', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/user/login')
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
                console.log(result.body)
                helper.assert204({}, result.body)
            })
    })
    xit('Getting user parameters (Unauthorized)', () => {
        chai.request(url)
            .get('/user/current')
            .send({})
            .then((response) => {
                helper.assert401(response.body)
            })
    })
})

