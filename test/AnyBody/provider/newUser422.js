let username = "qqqq"
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
            { field: 'fullName', message: 'Full Name cannot be blank.' },
            { field: 'username', message: 'Username cannot be blank.' },
            { field: 'email', message: 'Email cannot be blank.' },
            { field: 'password', message: 'Password cannot be blank.' },
            { field: 'confirmPassword', message: 'Confirm Password cannot be blank.' }
        ]
    },
    {
        scenario: 'Empty fields besides fullName and username',
        data: {
            fullName: "us",
            username: "us",
            email: "",
            password: "",
            confirmPassword: ""
        },
        result: [
            { field: 'email', message: 'Email cannot be blank.' },
            { field: 'password', message: 'Password cannot be blank.' },
            { field: 'confirmPassword', message: 'Confirm Password cannot be blank.' },
            { field: 'fullName', message: 'Full Name must be no less than 4.' },
            { field: 'username', message: 'Username must be no less than 3.' }
        ]
    },
    {
        scenario: 'Maximum lenghts of string',
        data: {
            fullName: "usususususususususuуу",
            username: "usususususususуу",
            email: "1afgdgfdgfdgreterterterterteertttttrrrrrrrrrrrrrrrrrrrrrrrt111223@i.ua",
            password: "111ususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususu",
            confirmPassword: "111ususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususususu"
        },
        result: [
            { field: 'fullName', message: 'Full Name must be no greater than 20.' },
            { field: 'username', message: 'Username must be no greater than 15.' },
            { field: 'password', message: 'Password must be no greater than 255.' },
            { field: 'email', message: 'Email is invalid.' }
        ]
    },
    {
        scenario: 'Using existing user value',
        data: {
            fullName: "qqqq",
            username: username,
            email: email,
            password: "asx11111",
            confirmPassword: "asx11111"
        },
        result: [
            { field: 'username', message: `Username "${username}" has already been taken.` },
            { field: 'email', message: `Email "${email}" has already been taken.` }
        ]
    }
]