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
        result: {
            // id: result.body.result.id,
            // fullName: result.body.result.fullName,
            // username: result.body.result.username,
            // email: result.body.result.email,
            // role: result.body.result.role,
            // updatedAt: result.body.result.updatedAt,
            // createdAt: result.body.result.createdAt,
            // birthday: result.body.result.birthday,
            // phone: result.body.result.phone,
            // location: result.body.result.location
        }
    }
]