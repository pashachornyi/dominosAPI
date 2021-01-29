// const chai = require('chai')
//     , chaiHttp = require('chai-http');
// chai.use(chaiHttp);
// require('dotenv').config()

const helper = require('../helpers/📌codes')
const provider201 = require('./provider/newDelivery201')
const provider401 = require('./provider/newDelivery401')
const http = require('../helpers/http')
const path = '/delivery'    


describe('Create new delivery', () => {
    provider201.forEach((element) => {
        it(element.scenario, (done) => {
            http.getToken()
                .end((err, result) => {
                    http.post(path, element.data, result.body.result.token)
                        .end((err, result) => {
                            console.log(result.body)
                            helper.assertCheckObjectAllKey(result.body.result, element.result, 'Delivery')
                            done()
                        })
                })
        })
    })
    provider401.forEach((element) => {
        it(element.scenario, (done) => {
            http.post(path, element.data)
                .end((err, result) => {
                    helper.assert401(result.body)
                    done()
                })
        })
    })
})

// describe('Create new delivery', () => {
//     beforeEach(async () => {
//         token = await chai.request(process.env.URL)
//             .post('/auth/login')
//             .send({
//                 username: process.env.USERNAME,
//                 password: process.env.PASSWORD
//             })
//     })
//     provider201.forEach((element) => {
//         it(element.scenario, (done) => {
//             chai.request(process.env.URL)
//                 .post(url)
//                 .set("Authorization", "Bearer " + token.body.result.token)
//                 .send(element.data)
//                 .end((err, result) => {
//                     helper.assertCheckObjectAllKeys(result.body.result, element.result, 'Delivery' )
//                     done()
//                 })
//         })
//     })
//     provider401.forEach((element) => {
//         it(element.scenario, (done) => {
//             chai.request(process.env.URL)
//                 .post(url)
//                 .send(element.data)
//                 .end((err, result) => {
//                     helper.assert401(result.body)
//                     done()
//                 })
//         })
//     })
// })