const assert = require('chai').assert;
const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const url = "https://my-dominos-backend.herokuapp.com/rest/v1"
const helper = require('../helpers/📌codes')


describe('Log in form', () => {
    describe('Log in', () => {
        it('Log in with valid data', () => {
            chai.request(url)
                .post('/user/login')
                .send({
                    username: "user1",
                    password: "zxcvas"
                })
                .then((result) => {
                    helper.assert200({}, result.body)
                })
        })
        it('Log in with empty fields', () => {
            chai.request(url)
                .post('/user/login')
                .send({
                    username: "",
                    password: ""
                })
                .then((result) => {
                    let response = result.body
                    helper.assert422([
                        { field: 'username', message: 'Username cannot be blank.'},
                        { field: 'password', message: 'Password cannot be blank.' }
                    ], response)
                })
        })
        it('Log in with invalid login and password', () => {
            chai.request(url)
                .post('/user/login')
                .send({
                    username: "user1",
                    password: "1"
                })
                .then((result) => {
                    let response = result.body
                    helper.assert422([{ field: 'username', message: 'Username or Password is invalid'}], response)
                })
        })
        it('Log in with invalid username and empty password', () => {
            chai.request(url)
                .post('/user/login')
                .send({
                    username: "user1",
                    password: ""
                })
                .then((result) => {
                    let response = result.body
                    helper.assert422([
                        { field: 'password', message: 'Password cannot be blank.' },
                        { field: 'username', message: 'Username or Password is invalid.'}
                    ], response)
                })
        })
    })
})
