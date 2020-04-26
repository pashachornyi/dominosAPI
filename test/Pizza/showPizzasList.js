const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"


describe('Pizza list', () => {
    describe('Comparing values', () => {
        it('Comparing pizza weight', () => {
            chai.request(url)
                .get('/pizza')
                .then(({ body }) => {
                    let listOfPizzas = body.result
                    listOfPizzas.forEach((pizza) => {
                        let { small, middle, big } = pizza.weight;
                        assert.isAbove(big, middle)
                        assert.isAbove(big, small)
                        assert.isAbove(middle, small)
                    });
                })
        });
        it('Comparing pizza price', function () {
            chai.request(url)
                .get('/pizza')
                .then(result => {
                    let response = result.body
                    let listOfPizzas = response.result
                    listOfPizzas.forEach(pizza => {
                        let low = pizza.price.low
                        let medium = pizza.price.medium
                        let high = pizza.price.high
                        assert.isAbove(high, low)
                        assert.isAbove(high, medium)
                        assert.isAbove(medium, low)
                    });
                });
        })
    });
});