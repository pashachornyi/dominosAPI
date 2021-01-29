let username = "user1"
let email = "pavel.chorniy16@gmail.com"
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
            { field: 'username', message: 'Username cannot be blank.' },
            { field: 'fullName', message: 'Full Name cannot be blank.' },
            { field: 'email', message: 'Email cannot be blank.' },
            { field: 'password', message: 'Password should contain at least 8 symbols, one upper case, one lowercase and one number and one special symbol.' },
            { field: 'confirmPassword', message: 'Confirm Password cannot be blank.' }
        ]
    },
    {
        scenario: 'Minimum lenghts of fullName and username (other data are valid)',
        data: {
            fullName: "us",
            username: "us",
            email: "uws@i.ua",
            password: "Test123!",
            confirmPassword: "Test123!"
        },
        result: [
            { field: 'username', message: '\"Username\" should contain at least 3 character(s).' },
            { field: 'fullName', message: '\"Full Name\" should contain at least 4 character(s).' }
        ]
    },
    {
        scenario: 'Maximum lenghts of of fullName and username (other data are valid)',
        data: {
            fullName: "usususususususususuуу",
            username: "usususususususуу",
            email: "uws@i.ua",
            password: "Test123!",
            confirmPassword: "Test123!"
        },
        result: [
            { field: 'username', message: '\"Username\" should contain at most 15 character(s).' },
            { field: 'fullName', message: '\"Full Name\" should contain at most 20 character(s).' }
        ]
    },
    {
        scenario: 'Using existing username value',
        data: {
            fullName: "qqqq",
            username: username,
            email: "qqqq@i.ua",
            password: "Test123!",
            confirmPassword: "Test123!"
        },
        result: [
            { field: 'username', message: `\"Username\" "${username}" has already been taken.` }
        ]
    },
    {
        scenario: 'Using existing email value',
        data: {
            fullName: "qqqq",
            username: "qqqq",
            email: email,
            password: "Test123!",
            confirmPassword: "Test123!"
        },
        result: [
            { field: 'email', message: `\"Email\" "${email}" has already been taken.` }
        ]
    },
    {
        scenario: 'Password and confirmPassword do not match',
        data: {
            fullName: "newUser",
            username: "newUser",
            email: "newUser@i.ua",
            password: "Test123!",
            confirmPassword: "Test123"
        },
        result: [
            { field: 'confirmPassword', message: '\"Confirm Password\" must be equal to \"Password\".' }
        ]
    }
]