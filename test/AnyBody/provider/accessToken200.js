require('dotenv').config()
module.exports = [
    {
        scenario: 'Log in with valid data',
        data: {
            username: process.env.USERNAME,
            password: process.env.PASSWORD
        },
        result: [
            'token',
            'expiredAt'
        ]
    }
]