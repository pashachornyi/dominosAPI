const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://dominos-backend.herokuapp.com/api/v1"
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Update user profile', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/auth/login')
            .send({
                // username: "username",
                // password: "Zxcvas@11"
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Getting user parameters (administrator)', () => {
        chai.request(url)
            .put('/user/profile')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({
                fullName: "user1",
                username: "user1",
                email: "pavel.chorniy16@gmail.com",
                birthday: "1997-08-10",
                phone: "380986309585"
            })
            .then((result) => {
                // console.log(result.body)
                helper.assert200({}, result.body)
            })
    })
    it('Getting user parameters (Unauthorized)', () => {
        chai.request(url)
            .put('/user/profile')
            .send({
                fullName: "user1",
                username: "user1",
                email: "pavel.chorniy16@gmail.com",
                birthday: "1997-08-10",
                phone: "380986309585"
            })
            .then((response) => {
                console.log(response.body)
                helper.assert401(response.body)
            })
    })
    before(async () => {
        token = await chai.request(url)
            .post('/auth/login')
            .send({
                username: "username",
                password: "Zxcvas@11"
            })
    })
    xit('Getting user parameters (public)', () => {
        chai.request(url)
            .put('/user/profile')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({
                fullName: "user1",
                username: "user1",
                email: "pavel.chorniy16@gmail.com",
                birthday: "1997-08-10",
                phone: "380986309585"
            })
            .then((result) => {
                console.log(result.body)
                // helper.assert200({}, result.body)
            })
    })
})

