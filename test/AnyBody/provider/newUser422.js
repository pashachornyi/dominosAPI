let username = "user1"
let email = "q@i.ua"
module.exports = [
    {
        scenario: 'Empty fields',
        data: {
            fullName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        result: [
            { field: 'username', message: 'Username can not be blank.' },
            { field: 'fullName', message: 'Full Name can not be blank.' },
            { field: 'email', message: 'Email can not be blank.' },
            { field: 'password', message: 'Password can not be blank.' }
        ]
    },
    {
        scenario: 'Minimum lenghts of fullName and username',
        data: {
            fullName: "us",
            username: "us",
            email: "uws@i.ua",
            password: "zxcvas11",
            confirmPassword: "zxcvas11"
        },
        result: [
            { field: 'username', message: 'Username must be no less than 3.' },
            { field: 'fullName', message: 'Full Name must be no less than 4.' }
        ]
    },
    {
        scenario: 'Maximum lenghts of string',
        data: {
            fullName: "usususususususususuуу",
            username: "usususususususуу",
            email: "uws@i.ua",
            password: "zxcvas11",
            confirmPassword: "zxcvas11"
        },
        result: [
            { field: 'username', message: 'Username must be no greater than 15.' },
            { field: 'fullName', message: 'Full Name must be no greater than 20.' }
        ]
    },
    {
        scenario: 'Using existing username value',
        data: {
            fullName: "qqqq",
            username: username,
            email: "qqqq@i.ua",
            password: "asx11111",
            confirmPassword: "asx11111"
        },
        result: [
            { field: 'username', message: `Username "${username}" has already been taken.` }
        ]
    },
    {
        scenario: 'Using existing email value',
        data: {
            fullName: "qqqq",
            username: "qqqq",
            email: email,
            password: "asx11111",
            confirmPassword: "asx11111"
        },
        result: [
            { field: 'email', message: `Email "${email}" has already been taken.` }
        ]
    }
]