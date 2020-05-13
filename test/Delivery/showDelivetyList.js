const helper = require('../helpers/📌codes')
const provider200 = require('./provider/deliveryList200')
const provider401 = require('./provider/deliveryList401')
const http = require('../helpers/http')
const path = '/delivery'


describe('Show delivery list', () => {
    provider200.forEach((element) => {
        it(element.scenario, (done) => {
            http.getToken()
                .end((err, result) => {
                    http.get(path, element.data, result.body.result.token)
                        .end((err, result) => {
                            helper.assertCheckObjectAllKeys(result.body.result[0], element.result, 'Delivery')
                            done()
                        })
                })
        })
    })
    provider401.forEach((element) => {
        it(element.scenario, (done) => {
            http.get(path, element.data)
                .end((err, result) => {
                    helper.assert401(result.body)
                    done()
                })
        })
    })
})