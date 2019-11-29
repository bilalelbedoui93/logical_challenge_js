const logic = require('./logic')
const data = require('./data')

// some filtering objects to test the function

const filteringObject = {
    category: "bal",
    ID: '004',
    regions: ["shoulders", "abdomen"]
}

const filteringObject1 = {
    category: "bal",
    ID: '004',
    regions: "shoulders"
}

const filteringObject2 = {
    category: "bal",
    ID: '003',
    regions: "shoulders"
}
const filteringObject3 = {
    category: "bal",
    ID: '003',
    regions: "buttocks"
}

const filteringObject4 = {
    category: "bal",
    ID: '003'
}

const filteringObject5 = {
    ID: '004'
}


// Here we call the function
const result = logic.customFilter(data, filteringObject4)

console.log(result)


