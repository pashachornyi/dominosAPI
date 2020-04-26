const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Log out form', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Log out', () => {
        chai.request(url)
            .post('/user/logout')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({})
            .then((response) => {
                // console.log(response.body)
                helper.assert204({}, response.body)
            })
    })
    it('Log out (Unauthorized)', () => {
        chai.request(url)
            .post('/user/logout')
            .send({})
            .then((response) => {
                // console.log(response.body)
                helper.assert401(response.body)
            })
    })

})

