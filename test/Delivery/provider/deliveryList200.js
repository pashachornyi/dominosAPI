require('dotenv').config()
module.exports = [
    {
        scenario: 'Show list',
        data: {
            perPage: 10,
            page: 1
        },
        result: [
            'id',
            'firstName',
            'phone',
            'email',
            'userId',
            'shop',
            'pizzasIds',
            'amount',
            'date',
            'address',
            'comment' 
        ]
    }
]