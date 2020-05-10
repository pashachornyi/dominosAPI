module.exports = [
    {
        scenario: 'Log in with invalid username and empty password',
        data: {
            username: "user1",
            password: ""
        },
        result: [
            { field: 'password', message: 'Password can not be blank.' },
        ]
    },
    {
        scenario: 'Log in with empty fields',
        data: {
            username: "",
            password: ""
        },
        result: [
            { field: 'username', message: 'Username can not be blank.' },
            { field: 'password', message: 'Password can not be blank.' }
        ]
    },
    {
        scenario: 'Log in with invalid login and password',
        data: {
            username: "user1",
            password: "1"
        },
        result: [
            { field: 'username', message: 'Username or Password is invalid.' }
        ]
    },
]