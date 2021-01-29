const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const helper = require('../helpers/📌codes')
require('dotenv').config()
const provider404 = require('./provider/verifyemail404')
const provider200 = require('./provider/verifyEmail200')
const url = '/auth​/confirm​/2d29ba03d8ef2c34ea4eeea6e9e199c1e36fade22b6b5415157f5f67a5241ae2768690713c8ba366c25b78dfe039f7c88bbc'


describe('Verify Token', () => {
    provider200.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .get(url)
                .send(element.data)
                .end((err, result) => {
                    console.log(result.body.result)
                    helper.assert200(result.body.result, element.result)
                    done()
                })
        })
    })
    provider404.forEach((element) => {
        xit(element.scenario, (done) => {
            chai.request(process.env.URL)
                .post(url)
                .send(element.data)
                .end((err, result) => {
                    helper.assert404(element.result, result.body)
                    done()
                })
        })
    })
})