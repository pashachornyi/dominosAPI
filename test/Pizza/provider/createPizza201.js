const faker = require('faker');
const pizzaName = faker.name.findName();
module.exports = [
    {
        scenario: 'Create random pizza',
        data: {
            name: name = pizzaName,
            category: category = "Класичні",
            ingredients: ingredients = [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: weight = {
                small: 342,
                middle: 343,
                big: 344
            },
            price: price = {
                low: 99.99,
                medium: 129.99,
                high: 200.99
            },
            // image: image = "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: {
            ingredients: ingredients,
            // image: image,
            // createdAt,
            // updatedAt,
            // deletedAt,
            // deletedBy,
            // _id,
            name: pizzaName,
            category: category,
            weight: weight,
            price: price
        }
    }
]