require('dotenv').config()
let partName = `${Math.floor(Math.random() * 10000)}_user`
module.exports = [
    {
        scenario: 'Valid values',
        data: {
            fullName: partName,
            username: partName,
            email: `${partName}@i.ua`,
            password: "zxcvas11",
            confirmPassword: "zxcvas11"
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
            'createdAt',
            'updatedAt',
            'deletedAt',
            'deletedBy'
        ]
    }
]