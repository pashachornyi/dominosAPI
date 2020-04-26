const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"
var token;
const helper = require('../helpers/📌codes')
require('dotenv').config()


describe('Update user profile', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Changing user data (phone number)', () => {
        chai.request(url)
            .patch('/user/update/5e90b8cca8d3bd002422f46a')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({
                fullName: "user1",
                username: "user1",
                email: "user1@test.com",
                birthday: 1997-10-08,
                phone: 986309585
            })
            .then((result) => {
                helper.assert200({}, result.body)
            })
    })
    it('Changing user data (Unauthorized)', () => {
        chai.request(url)
            .patch('/user/update/5e90b8cca8d3bd002422f46a')
            .send({
                fullName: "user1",
                username: "user1",
                email: "user1@test.com",
                birthday: 1997-10-08,
                phone: 996309585
            })
            .then((result) => {
                helper.assert401(result.body)
            })
    })
    it('Changing user data (phone number)', () => {
        chai.request(url)
            .patch('/user/update/5e90b8cca8d3bd002422f46a')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({
                fullName: "",
                username: "",
                email: "",
                birthday: "",
                phone: ""
            })
            .then((result) => {
                helper.assert422([], result.body)
            })
    })
})