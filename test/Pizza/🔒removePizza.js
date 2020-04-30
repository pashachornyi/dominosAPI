const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


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
    it('Delete pizza (unauthorized)', () => {
        chai.request(process.env.URL)
            .delete('/pizza/5ea49664d7737d002471f6b1')
            .send({})
            .then((result) => {
                helper.assert401(result.body)
            })
    })
    it('Delete pizza with same image', () => {
        chai.request(process.env.URL)
            .delete('/pizza/5ea49664d7737d00')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({})
            .then((result) => {
                helper.assert404(result.body)
            })
    })
})