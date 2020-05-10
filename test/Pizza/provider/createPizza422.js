const faker = require('faker');
const pizzaName = faker.name.findName();
module.exports = [
    {
        scenario: 'Create random pizza with empty body',
        data: {},   
        result: [
            {
                field: "name",
                message: "Name cannot be blank."
            },
            {
                field: "category",
                message: "Category cannot be blank."
            },
            {
                field: "ingredients",
                message: "Ingredients cannot be blank."
            },
            {
                field: "weight",
                message: "Weight cannot be blank."
            },
            {
                field: "price",
                message: "Price cannot be blank."
            },
            {
                field: "small",
                message: "Small must be no greater than 0."
            },
            {
                field: "middle",
                message: "Middle must be no greater than 0."
            },
            {
                field: "big",
                message: "Big must be no greater than 0."
            },
            {
                field: "low",
                message: "Low must be no greater than 0."
            },
            {
                field: "medium",
                message: "Medium must be no greater than 0."
            },
            {
                field: "high",
                message: "High must be no greater than 0."
            }
        ]
    },
    {
        scenario: 'Create random pizza (min) length of pizza name',
        data: {
            name: "qq",
            category: "Класичні",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: 342,
                middle: 343,
                big: 344
            },
            price: {
                low: 99.99,
                medium: 129.99,
                high: 200.99
            },
            image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: [
            {
                field: "name",
                message: "Name must be no less than 3."
            }
        ]
    },
    {
        scenario: 'Create random pizza (max length of pizza name)',
        data: {
            name: "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
            category: "Класичні",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: 342,
                middle: 343,
                big: 344
            },
            price: {
                low: 99.99,
                medium: 129.99,
                high: 200.99
            },
            image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: [
            {
                field: "name",
                message: "Name must be no greater than 40."
            }
        ]
    },
    {
        scenario: 'Create random pizza with invalid category',
        data: {
            name: pizzaName,
            category: "Класичні1",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: 342,
                middle: 343,
                big: 344
            },
            price: {
                low: 99.99,
                medium: 129.99,
                high: 200.99
            },
            image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: [
            {
                field: "category",
                message: "Category is not alloved."
            }
        ]
    },
    {
        scenario: 'Create random pizza with invalid ingredient',
        data: {
            name: pizzaName,
            category: "Класичні",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34___",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: 342,
                middle: 343,
                big: 344
            },
            price: {
                low: 99.99,
                medium: 129.99,
                high: 200.99
            },
            image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: [
            {
                field: "ingredients",
                message: "Ingredients is not valid."
            }
        ]
    },
    {
        scenario: 'Create random pizza with epmty weights',
        data: {
            name: pizzaName,
            category: "Класичні",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: "",
                middle: "",
                big: ""
            },
            price: {
                low: 99.99,
                medium: 129.99,
                high: 200.99
            },
            image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: [
            {
                field: "small",
                message: "Small must be no greater than 0."
            },
            {
                field: "middle",
                message: "Middle must be no greater than 0."
            },
            {
                field: "big",
                message: "Big must be no greater than 0."
            }
        ]
    },
    {
        scenario: 'Create random pizza with invalid weight (small)',
        data: {
            name: pizzaName,
            category: "Класичні",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: 345,
                middle: 343,
                big: 344
            },
            price: {
                low: 99.99,
                medium: 129.99,
                high: 200.99
            },
            image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: [
            {
                field: "small",
                message: "Small weight must be no greater than Middle."
            }
        ]
    },
    {
        scenario: 'Create random pizza with invalid weight (middle)',
        data: {
            name: pizzaName,
            category: "Класичні",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: 345,
                middle: 347,
                big: 344
            },
            price: {
                low: 99.99,
                medium: 129.99,
                high: 200.99
            },
            image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: [
            {
                field: "middle",
                message: "Middle weight must be no greater than Big."
            }
        ]
    },
    {
        scenario: 'Create random pizza with epmty prices',
        data: {
            name: pizzaName,
            category: "Класичні",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: 345,
                middle: 343,
                big: 344
            },
            price: {
                low: "",
                medium: "",
                high: ""
            },
            image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: [
            {
                field: "low",
                message: "Low must be no greater than 0."
            },
            {
                field: "medium",
                message: "Medium must be no greater than 0."
            },
            {
                field: "high",
                message: "High must be no greater than 0."
            }
        ]
    },
    {
        scenario: 'Create random pizza with invalid price (low)',
        data: {
            name: pizzaName,
            category: "Класичні",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: 342,
                middle: 343,
                big: 344
            },
            price: {
                low: 199.99,
                medium: 129.99,
                high: 200.99
            },
            image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: [
            {
                field: "low",
                message: "Low price must be no greater than Medium."
            }
        ]
    },
    {
        scenario: 'Create random pizza with invalid price (medium)',
        data: {
            name: pizzaName,
            category: "Класичні",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: 342,
                middle: 343,
                big: 344
            },
            price: {
                low: 199.99,
                medium: 229.99,
                high: 200.99
            },
            image: "https://rusvesna.su/sites/default/files/styles/orign_wm/public/negr_.jpg"
        },
        result: [
            {
                field: "medium",
                message: "Medium price must be no greater than High."
            }
        ]
    },
    {
        scenario: 'Create random pizza with invalid image link',
        data: {
            name: pizzaName,
            category: "Класичні",
            ingredients: [
                "5e4d6f4ad219a81e87b87d34",
                "5e4d6fe8d219a81e87b87d3d",
                "5e4d6ff8d219a81e87b87d3e",
                "5e4d6f55d219a81e87b87d35"
            ],
            weight: {
                small: 342,
                middle: 343,
                big: 344
            },
            price: {
                low: 99.99,
                medium: 129.99,
                high: 200.99
            },
            image: 1
        },
        result: [
            {
                field: "image",
                message: "Image must be a link."
            }
        ]
    }
]