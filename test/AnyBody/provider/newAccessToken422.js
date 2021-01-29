module.exports = [
    {
        scenario: 'Sending request with empty email',
        data: {
            email: ""
        },
        result: [
            { field: 'email', message: 'Email is not a valid email address.' }
        ]
    }
]