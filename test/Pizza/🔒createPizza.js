const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()
const provider201 = require('./provider/createPizza201')
// const provider401 = require('./provider/createPizza401')
// const provider422 = require('./provider/createPizza422')
const url = '/pizza'


describe('Creating pizza', () => {
    beforeEach(async () => {
        token = await chai.request(process.env.URL)
            .post('/auth/login')
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
                .end((err, result) => {
                    console.log(result.body)
                    // assert.deepInclude(result.body.result, element.result)
                    done()
                })
        })
    })
    // provider401.forEach((element) => {
    //     it(element.scenario, (done) => {
    //         chai.request(process.env.URL)
    //             .post(url)
    //             .send(element.data)
    //             .end((err, result) => {
    //                 helper.assert401(result.body)
    //                 done()
    //             })
    //     })
    // })
    // provider422.forEach((element) => {
    //     it(element.scenario, (done) => {
    //         chai.request(process.env.URL)
    //             .post(url)
    //             .set("Authorization", "Bearer " + token.body.result.token)
    //             .send(element.data)
    //             .end((err, result) => {
    //                 helper.assert422(element.result, result.body)
    //                 done()
    //             })
    //     })
    // })
})