const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()
const provider200 = require('./provider/deliveryList200')
const provider401 = require('./provider/deliveryList401')


describe('Show delivery list', () => {
    beforeEach(async () => {
        token = await chai.request(process.env.URL)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    provider200.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .get('/delivery')
                .query(element.data)
                .set("Authorization", "Bearer " + token.body.result.token)
                .end((err, result) => {
                    helper.assertCheckObjectAllKeys(result.body.result[0], element.result, 'Delivery')
                    done()
                })
        })
    })
    provider401.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .get('/delivery')
                .send(element.data)
                .end((err, result) => {
                    helper.assert401(result.body)
                    done()
                })
        })
    })
});