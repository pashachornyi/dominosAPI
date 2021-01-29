const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const helper = require('../helpers/📌codes')
require('dotenv').config()
const provider422 = require('./provider/newAccessToken422')
const provider204 = require('./provider/newAccessToken204')
const url = '/auth/resend-verify-email'


describe('Email form', () => {
    provider422.forEach((element) => {
        xit(element.scenario, (done) => {
            chai.request(process.env.URL)
                .post(url)
                .send(element.data)
                .end((err, result) => {
                    helper.assert422(element.result, result.body)
                    done()
                })
        })
    })
    provider204.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .post(url)
                .send(element.data)
                .end((err, result) => {
                    helper.assertDeepInclude(result.body.result, element.result)
                    done()
                })
        })
    })
})