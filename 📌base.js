const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://dominos-backend.herokuapp.com/api/v1"
var token;
const helper = require('./test/helpers/📌codes')
require('dotenv').config()


describe('', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('', () => {
        chai.request(url)


    })

});
