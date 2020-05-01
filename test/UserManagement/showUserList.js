const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1";
var token;
const helper = require('../helpers/📌codes');
require('dotenv').config()


describe('Show user list', () => {
    describe('Log in', () => {
        beforeEach(async () => {
            token = await chai.request(url)
                .post('/user/login')
                .send({
                    username: process.env.USERNAME,
                    password: process.env.PASSWORD
                })
        })
        it('Getting user list and copmaring with database', () => {
            chai.request(url)
                .get('/user')
                .set("Authorization", "Bearer " + token.body.result.token)
                .send({})
                .then((result) => {
                    helper.assert200({}, result.body)
                })
        })
        it('Getting user list (Invalid user data)', () => {
            chai.request(url)
                .get('/user')
                .send({})
                .then((result) => {
                    helper.assert401(result.body)
                })
        })
    })
})
