const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
var token;
const helper = require('../helpers/📌codes')
const faker = require('faker');
const pizzaName = faker.name.findName();
require('dotenv').config()
const provider = require('../Pizza/provider/remove_pizza')


describe('Create pizza', () => {
    beforeEach(async () => {
        token = await chai.request(process.env.URL)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    xit('Create random pizza', () => {
        chai.request(process.env.URL)
            .post('/pizza/create')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({
                "name": pizzaName,
                "category": "Класичні",
                "ingredients": [
                    "5e4d6f4ad219a81e87b87d34",
                    "5e4d6fe8d219a81e87b87d3d",
                    "5e4d6ff8d219a81e87b87d3e",
                    "5e4d6f55d219a81e87b87d35",
                ],
                "weight": {
                    "small": 342,
                    "middle": 343,
                    "big": 344
                },
                "price": {
                    "low": 99.99,
                    "medium": 129.99,
                    "high": 200.99
                },
                "image": "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
            })
            .then((result) => {
                helper.assert201({}, result.body)
            })
    })
    provider.forEach((element) => {
        console.log(element)
        it(element.scenario, () => {
            chai.request(process.env.URL)
                .post('/pizza/create')
                .set("Authorization", "Bearer " + token.body.result.token)
                .send({})
                .end((err, response) => {
                    helper.assert422(element.result, response.body)
                })
        })
    })
})