const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Update user location', () => {
    describe('Log in', () => {
        beforeEach(async () => {
            token = await chai.request(url)
                .post('/user/login')
                .send({
                    username: process.env.USERNAME,
                    password: process.env.PASSWORD
                })
        })
        it('Comparing location', () => {
            let x = 50.545644;
            let y = 30.545644;
            chai.request(url)
                .post('/user/location')
                .set("Authorization", "Bearer " + token.body.result.token)
                .send({ lat: x, lng: y })
                .then((result) => {
                    let response = result.body
                    let locationLat = response.result.location.lat
                    let locationLng = response.result.location.lng
                    let code = response.code
                    assert.equal(locationLat, x)
                    assert.equal(locationLng, y)
                    assert.equal(code, 200)
                })
        })
        it('Comparing error validation and values with negative test scenarios', () => {
            let x = 0;
            let y = 0;
            chai.request(url)
                .post('/user/location')
                .set("Authorization", "Bearer " + token.body.result.token)
                .send({ lat: x, lng: y })
                .then((result) => {
                    let response = result.body
                    helper.assert422([
                        { field: 'lat', message: 'Lat must be no greater than 0.' },
                        { field: 'lng', message: 'Lng must be no greater than 0.' }
                    ], response)
                })
        })
    });
});