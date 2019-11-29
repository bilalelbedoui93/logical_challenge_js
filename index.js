const logic = require('./logic')
const data = require('./data')


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

const result = logic.customFilter(data, filteringObject4)

console.log(result)


