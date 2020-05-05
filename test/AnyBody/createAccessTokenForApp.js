const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const helper = require('../helpers/📌codes')
require('dotenv').config()
const provider422 = require('./provider/accessToken422')
const provider200 = require('./provider/accessToken200')
const url = '/user/login'


describe('Log in form', () => {
    provider422.forEach((element) => {
        it(element.scenario, () => {
            chai.request(process.env.URL)
                .post(url)
                .send(element.data)
                .end((err, result) => {
                    helper.assert422(element.result, result.body)
                })
        })
    })
    provider200.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .post(url)
                .send(element.data)
                .then((result) => {
                    helper.assert200(element.result, result.body)
                    done()
                })
        })
    })
})