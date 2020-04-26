const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()
const faker = require('faker');
const pizzaName = faker.name.findName();


describe('Create pizza', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Create random pizza', () => {
        chai.request(url)
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
    it('Create random pizza with empty body', () => {
        chai.request(url)
            .post('/pizza/create')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({})
            .then((result) => {
                helper.assert422([], result.body)
            })
    })
})