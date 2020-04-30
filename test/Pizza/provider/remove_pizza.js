module.exports = [
    {
        scenario: 'Create random pizza with empty body',
        data: {
            username: "user1",
            password: "zxcvas111" 
        },
        result: [
            { field: 'email', message: 'Email cannot be blank.' }
        ]
    },
    // {
    //     scenario: 'Create random pizza with empty body',
    //     data: {
    //         username: "user1",
    //         password: "zxcvas111" 
    //     },
    //     result: {}
    // }
]