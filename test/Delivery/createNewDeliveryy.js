const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"


describe('Create new delivery', () => {
    it('Create new delivery (valid data)', () => {
        chai.request(url)
            .post('/delivery/create')
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
            .then(({ body }) => {
                console.log(body.result)
            })
    });
})