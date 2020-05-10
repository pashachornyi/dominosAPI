const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()
const provider401 = require('./provider/removePizza401')
const provider404 = require('./provider/removePizza404')


describe('Delete pizza', () => {
    beforeEach(async () => {
        token = await chai.request(process.env.URL)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Show pizza list and delete pizzas with same images', () => {
        chai.request(process.env.URL)
            .get('/pizza')
            .then(({ body }) => {
                let imageUrl = "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
                let pizzas = body.result
                pizzas.forEach(pizza => {
                    if (pizza.image == imageUrl) {
                        chai.request(process.env.URL)
                            .delete('/pizza/' + pizza.id)
                            .set("Authorization", "Bearer " + token.body.result.token)
                            .send({})
                            .then((result) => {
                                helper.assert204({}, result.body)
                            })
                    }
                })
            })
    });
    provider401.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .delete('/pizza/5e57ccaf79e59b00246ccb1c')
                .send(element.data)
                .end((err, result) => {
                    helper.assert401(result.body)
                    done()
                })
        })
    })
    provider404.forEach((element) => {
        it(element.scenario, (done) => {
            chai.request(process.env.URL)
                .delete('/pizza/5e57ccaf79e59b00246ccb1c___')
                .set("Authorization", "Bearer " + token.body.result.token)
                .send(element.data)
                .end((err, result) => {
                    helper.assert404(result.body)
                    done()
                })
        })
    })
})