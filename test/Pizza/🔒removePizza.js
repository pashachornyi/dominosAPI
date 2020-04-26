const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Delete pizza', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    xit('Show pizza list and delete pizzas with same images', () => {
        chai.request(url)
            .get('/pizza')
            .then(({ body }) => {
                let imageUrl = "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
                let pizzas = body.result
                pizzas.forEach(pizza => {
                    if (pizza.image == imageUrl) {
                        chai.request(url)
                            .delete('/pizza/' + pizza.id)
                            .set("Authorization", "Bearer " + token.body.result.token)
                            .send({})
                            .then((result) => {
                                helper.assert204({}, result.body)
                            })
                    }

                }

                )
            })
    });
    xit('Delete pizza (Unauthorized)', () => {
        chai.request(url)
            .delete('/pizza/5ea49664d7737d002471f6b1')
            .send({})
            .then((result) => {
                helper.assert401(result.body)
            })
    })
    it('Delete pizza with same image', () => {
        chai.request(url)
            .delete('/pizza/5ea49664d7737d00')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({})
            .then((result) => {
                console.log(result.body)
                // helper.assert404(result.body)
            })
    })
})