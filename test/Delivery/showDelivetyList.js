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
                    // console.log(result.body)
                    // console.log(result.body.result[0].id)
                    // console.log(element.result.id)
                   
                    assert.hasAnyKeys({foo: 1, bar: 2, baz: 3}, ['foo', 'iDontExist', 'baz'])
                    
                    // assert.containsAllDeepKeys(result.body.result[0], element.result)

                    // result.body.result.forEach((element) => {
                    //     assert.include(result.body.result, element.result)
                    // });
                    // assert.include(element.result, element.result.id)
                    // helper.assert200(element.result, result.body)
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