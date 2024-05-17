console.log("Hello World")

const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

const fromEuroToDollar = valueInEuro => valueInEuro * 1.07;
const fromDollarToYen  = valueInYen  => valueInYen  * 146.261;
const fromYenToPounds  = valueInPounds => valueInPounds * 0.00556;

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPounds};
