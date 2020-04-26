const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Update pizza', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Show pizza list and update pizza photos with same images', () => {
        chai.request(url)
            .get('/pizza')
            .then(({ body }) => {
                let imageUrl = "https://aesiitf.kpi.ua/wp-content/uploads/2014/11/AlexeikE.jpg"
                let pizzas = body.result
                pizzas.forEach(pizza => {
                    if (pizza.image == imageUrl) {
                        chai.request(url)
                            .patch('/pizza/' + pizza.id)
                            .set("Authorization", "Bearer " + token.body.result.token)
                            .send({
                                id: "5ea55f58b2e57f0024ddfab7",
                                name: "Madilyn Veum",
                                category: "Класичні",
                                ingredients: [
                                    "5e4d6f4ad219a81e87b87d34",
                                    "5e4d6fe8d219a81e87b87d3d",
                                    "5e4d6ff8d219a81e87b87d3e",
                                    "5e4d6f55d219a81e87b87d35"
                                ],
                                weight: {
                                    "small": 342,
                                    "middle": 343,
                                    "big": 344
                                },
                                price: {
                                    "low": 99.99,
                                    "medium": 129.99,
                                    "high": 200.99
                                },
                                image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
                            })
                            .then((result) => {
                                helper.assert200({}, result.body)
                            })
                    }

                }

                )
            })
    });
    it('Update pizza (incorrect ID)', () => {
        chai.request(url)
            .patch('/pizza/5ea55f50b2e57f0024ddfab4zzzzzz')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({})
            .then((result) => {
                helper.assert404(result.body)
            })
    })
    it('Update pizza (empty body)', () => {
        chai.request(url)
            .patch('/pizza/5ea55f50b2e57f0024ddfab4')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({})
            .then((result) => {
                helper.assert422([], result.body)
            })
    })
    it('Update pizza (Unauthorized)', () => {
        chai.request(url)
            .patch('/pizza/5ea55f50b2e57f0024ddfab4')
            .send({})
            .then((result) => {
                helper.assert401(result.body)
            })
    })
})