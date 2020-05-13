const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const helper = require('../helpers/📌codes')
require('dotenv').config()
const provider422 = require('./provider/newUser422')
// const provider201 = require('./provider/newUser201')
const url = '/auth/register'


// for (let i = 0; i < 4; i++) {
//         xit('Valid values', () => {
//             let partName = `${Math.floor(Math.random() * 10000)}_user`
//             chai.request(process.env.URL)
//                 .post('/auth/register')
//                 .send({
//                     fullName: partName,
//                     username: partName,
//                     email: `${partName}@test.email`,
//                     password: "zxcvas11",
//                     confirmPassword: "zxcvas11"
//                 })
//                 .then((result) => {
//                     helper.assert201({}, result.body)
//                 })
//         })
//     })
// }

describe('Register validation', () => {
    provider201.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .post(url)
                .send(element.data)
                .then((result) => {
                    helper.assertCheckObjectAnyKeys(result.body.result, element.result, 'Register')
                    done()
                })
        })
    })
    provider422.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .post(url)
                .send(element.data)
                .end((err, result) => {
                    helper.assert422(element.result, result.body)
                    done()
                })
        })
    })
})