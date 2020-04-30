const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Create new delivery', () => {
    beforeEach(async () => {
        token = await chai.request(process.env.URL)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Create new delivery (valid data)', () => {
        chai.request(process.env.URL)
            .post('/delivery/create')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({
                firstName: "user1",
                phone: 380986309585,
                email: "user1@test.com",
                userId: "5e90b8cca8d3bd002422f46a",
                shop: "5e4d6f4ad219a81e87b87d34",
                pizzaIds: [
                    "5e5559b2cb7b340024dd7649"
                ],
                payment: {
                    coupon: "pidar",
                    remainder: "250",
                    type: "card"
                },
                amount: 100500,
                date: {
                    date: "2020-04-26",
                    time: "19:00"
                },
                address: {
                    street: "Yangela street",
                    house: 5,
                    flat: 314,
                    entrance: "1A",
                    code: 1111,
                    floor: 3
                },
                comment: "Hostel"
            })
            .then((result) => {
                helper.assert201({}, result.body)
            })
    });
    it('Create new delivery (unauthorized)', () => {
        chai.request(process.env.URL)
            .post('/delivery/create')
            .send({})
            .then((result) => {
                helper.assert401(result.body)
            })
    });
})