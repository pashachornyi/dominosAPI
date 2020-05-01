const http = require('../helpers/httpClient');
const helper = require('../helpers/codes')
const provider422 = require('./provider/login422')
const provider200 = require('./provider/login200')
const url = '/user/login'


describe('Log in form', () => {
    provider422.forEach((element) => {
        it(element.scenario, (done) => {
            http.post(url, element.data).
                end((err, result) => {
                    helper.assert422(element.result, result.body)
                    done();
                })
        })
    })
    provider200.forEach((element) => {
        it(element.scenario, (done) => {
            http.post(url, element.data).
                end((err, result) => {
                    helper.assert200(element.result, result.body)
                    done();
                })
        })
    })
})