// require('dotenv').config()
module.exports = [
    {
        scenario: 'Show list',
        data: {
            limit: 10,
            page: 1
        },
        result: [
            'id',
            'firstName',
            'phone',
            'email',
            'shop',
            'pizzasIds',
            'address',
            'comment', 
            'date',
            'payment',
            'amount',
            'createdAt',
            'updatedAt',
            'deletedAt',
            'deletedBy'
        ]
    }
]