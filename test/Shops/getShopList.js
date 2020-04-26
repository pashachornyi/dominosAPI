const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"


describe('Get shop list', () => {
    it('Get shop list (valid data)', () => {
        chai.request(url)
            .get('/shops')
            .send({})
            .then(({ body }) => {
                console.log(body.result)
            })
    });
})