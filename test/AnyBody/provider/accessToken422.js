module.exports = [
    {
        scenario: 'Log in with empty fields',
        data: {
            username: "",
            password: ""
        },
        result: [
            { field: 'username', message: 'Username cannot be blank.' }
        ]
    },
    {
        scenario: 'Log in with invalid login and valid password',
        data: {
            username: "1122",
            password: "Test123!"
        },
        result: [
            { field: 'username', message: 'Incorrect email address and/or password' },
        ]
    },
    {
        scenario: 'Log in with valid login and invalid (empty) password',
        data: {
            username: "user1",
            password: ""
        },
        result: [
            { field: 'password', message: 'Password should contain at least 8 symbols, one upper case, one lowercase and one number and one special symbol.' },
        ]
    },
    {
        scenario: 'Log in with invalid login (long login)',
        data: {
            username: "1111111111111112",
            password: ""
        },
        result: [
            { field: 'username', message: '\"Username\" should contain at most 15 character(s).' }
        ]
    },
    {
        scenario: 'Log in with invalid login (short login)',
        data: {
            username: "12",
            password: ""
        },
        result: [
            { field: 'username', message: '\"Username\" should contain at least 3 character(s).' }
        ]
    },
]