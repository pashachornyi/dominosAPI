const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const helper = require('../helpers/📌codes')
require('dotenv').config()
const provider201 = require('./provider/newDelivery201')
const provider401 = require('./provider/newDelivery401')
const url = '/delivery/create'


describe('Create new delivery', () => {
    beforeEach(async () => {
        token = await chai.request(process.env.URL)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    provider201.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .post(url)
                .set("Authorization", "Bearer " + token.body.result.token)
                .send(element.data)
                .then((result) => {
                    helper.assert201(element.result, result.body)
                    done()
                })
        })
    })
    provider401.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .post(url)
                .send(element.data)
                .end((err, result) => {
                    helper.assert401(result.body)
                    done()
                })
        })
    })
})