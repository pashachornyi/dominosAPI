const chai = require('chai')
    , chaiHttp = require('chai-http');
chai.use(chaiHttp);
const helper = require('../helpers/📌codes')
require('dotenv').config()


for (let i = 0; i < 4; i++) {
    describe('Register validation', () => {
        it('Valid values', () => {
            let partName = `${Math.floor(Math.random() * 10000)}_user`
            chai.request(process.env.URL)
                .post('/user/register')
                .send({
                    fullName: partName,
                    username: partName,
                    email: `${partName}@test.email`,
                    password: "zxcvas11",
                    confirmPassword: "zxcvas11"
                })
                .then((result) => {
                    helper.assert201({}, result.body)
                })
        })
    })
}


describe('User registration', () => {
    it('Valid values', () => {
        let partName = `${Math.floor(Math.random() * 10000)}_user`
        chai.request(process.env.URL)
            .post('/user/register')
            .send({
                fullName: partName,
                username: partName,
                email: `${partName}@i.ua`,
                password: "zxcvas11",
                confirmPassword: "zxcvas11"
            })
            .then((result) => {
                helper.assert201({}, result.body)
            })
    })
    it('Empty fields', () => {
        chai.request(process.env.URL)
            .post('/user/register')
            .send({
                fullName: "",
                username: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
            .then((result) => {
                let response = result.body
                helper.assert422([
                    { field: 'fullName', message: 'Full Name cannot be blank.' },
                    { field: 'username', message: 'Username cannot be blank.' },
                    { field: 'email', message: 'Email cannot be blank.' },
                    { field: 'password', message: 'Password cannot be blank.' },
                    { field: 'confirmPassword', message: 'Confirm Password cannot be blank.' }
                ], response)
            })
    })
    it('Empty fields besides fullName and username', () => {
        chai.request(process.env.URL)
            .post('/user/register')
            .send({
                fullName: "us",
                username: "us",
                email: "",
                password: "",
                confirmPassword: ""
            })
            .then((result) => {
                let response = result.body
                // console.log(response)
                helper.assert422([
                    { field: 'email', message: 'Email cannot be blank.' },
                    { field: 'password', message: 'Password cannot be blank.' },
                    { field: 'confirmPassword', message: 'Confirm Password cannot be blank.' },
                    { field: 'fullName', message: 'Full Name must be no less than 4.' },
                    { field: 'username', message: 'Username must be no less than 3.' }
                ], response)
            })
    })
    it('Maximum lenghts of string', () => {
        chai.request(process.env.URL)
            .post('/user/register')
            .send({
                fullName: "usususususususususuуу",
                username: "usususususususуу",
                email: "1afgdgfdgfdgreterterterterteertttttrrrrrrrrrrrrrrrrrrrrrrrt111223@i.ua",
                password: "111ususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususu",
                confirmPassword: "111ususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususu"
            })
            .then((result) => {
                let response = result.body
                // console.log(response)
                helper.assert422([
                    { field: 'fullName', message: 'Full Name must be no greater than 20.' },
                    { field: 'username', message: 'Username must be no greater than 15.' },
                    { field: 'password', message: 'Password must be no greater than 255.' },
                    { field: 'email', message: 'Email is invalid.' }
                ], response)
            })
    })
    it('Using existing user value', () => {
        let username = "qqqq"
        let email = "q@i.ua"
        chai.request(process.env.URL)
            .post('/user/register')
            .send({
                fullName: "qqqq",
                username: username,
                email: email,
                password: "asx11111",
                confirmPassword: "asx11111"
            })
            .then((result) => {
                let response = result.body
                helper.assert422([
                    { field: 'username', message: `Username "${username}" has already been taken.` },
                    { field: 'email', message: `Email "${email}" has already been taken.` }
                ], response)
            })
    })
})