require('dotenv').config()
let partName = `${Math.floor(Math.random() * 10000)}_user`
module.exports = [
    {
        scenario: 'Valid values',
        data: {
            fullName: partName,
            username: partName,
            email: `${partName}@i.ua`,
            password: "Test123!",
            confirmPassword: "Test123!"
        },
        result: [
            'id',
            'username',
            'fullName',
            'email',
            'role',
            'location',
            'birthday',
            'phone',
            'image',
            'createdAt',
            'updatedAt',
        ]
    }
]