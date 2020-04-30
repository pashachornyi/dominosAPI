const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1";
var id, token;
const helper = require('../helpers/📌codes');
require('dotenv').config();
let partName = `${Math.floor(Math.random() * 10000)}_user`;


describe('Creating and removing user', () => {
    it('Create new user', async () => {
        let registerResponse = await chai.request(url)
            .post('/user/register')
            .send({
                fullName: partName,
                username: partName,
                email: `${partName}@i.ua`,
                password: "zxcvas111",
                confirmPassword: "zxcvas111"
            })
        id = await registerResponse.body.result.id
        let loginResponse = await chai.request(url)
            .post('/user/login')
            .send({
                username: partName,
                password: "zxcvas111"
            })
        token = await loginResponse.body.result.token
    })
    it('Deleting this user', () => {
        chai.request(url)
            .delete('/user/' + id)
            .set("Authorization", "Bearer " + token)
            .send({})
            .then((result) => {
                helper.assert204({}, result.body)
            })
    })

})


describe('Deleting users with same emails', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Deleting', () => {
        chai.request(url)
            .get('/user')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({})
            .then(({ body }) => {
                let users = body.result
                users.forEach(user => {
                    if (user.email.includes('i.ua')) {
                        chai.request(url)
                            .delete('/user/' + user.id)
                            .set("Authorization", "Bearer " + token.body.result.token)
                            .send({})
                            .then((result) => {
                                helper.assert204({}, result.body)
                            })
                    }
                });
            })
    })
})


describe('Deleting user (400 codes)', () => {
    beforeEach(async () => {
        token = await chai.request(url)
            .post('/user/login')
            .send({
                username: process.env.USERNAME,
                password: process.env.PASSWORD
            })
    })
    it('Delete user (incorrect user id)', () => {
        chai.request(url)
            .get('/user')
            .set("Authorization", "Bearer " + token.body.result.token)
            .send({})
            .then(({ body }) => {
                let users = body.result[2].id
                chai.request(url)
                    .delete(`/user/${users}111`)
                    .set("Authorization", "Bearer " + token.body.result.token)
                    .send({})
                    .then((result) => {
                        helper.assert404(result.body)
                    })
            })
    })
    it('Delete user(unauthorized)', () => {
        chai.request(url)
            .delete('/user/5ea5e7e96ed2230024d7d116')
            .send({})
            .then((result) => {
                helper.assert401(result.body)
            })
    })
})