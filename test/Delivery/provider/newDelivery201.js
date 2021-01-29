module.exports = [
    {
        scenario: 'Create new delivery (valid data)',
        data: {
            firstName: firstName = "user1",
            phone: phone = 380986309585,
            email: email = "user1@test.com",
            userId: userId = "5e90b8cca8d3bd002422f46a",
            shop: shop = "5e4d6f4ad219a81e87b87d34",
            pizzaIds: pizzaIds = [
                "5e5559b2cb7b340024dd7649"
            ],
            payment: {
                coupon: coupon = "pidar",
                remainder: remainder = "250",
                type: type = "card"
            },
            amount: amount = 100500,
            date: {
                date: date = "2020-05-03",
                time: time = "19:00"
            },
            address: {
                street: street = "Yangela street",
                house: house = 5,
                flat: flat = 314,
                entrance: entrance = "1A",
                code: code = 1111,
                floor: floor = 3
            },
            comment: comment = "Hostel"
        },
        result: [
            "_id",
            "address",
            "amount",
            "comment",
            "createdAt",
            "date",
            "deletedAt",
            "deletedBy",
            "email",
            "firstName",
            "payment",
            "phone",
            "pizzaIds",
            "shop",
            "updatedAt",
            "userId"
        ]
    }
]