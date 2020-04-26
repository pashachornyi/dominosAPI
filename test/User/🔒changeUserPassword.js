const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Chande user password', () => {
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
            .post('/user/change-password')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({
                currentPassword: "zxcvas1111",
                newPassword: "zxcvas111",
                confirmPassword: "zxcvas111"
            })
            .then((result) => {
                console.log(result.body)
                // helper.assert204({}, result.body)
            })
    })
})
