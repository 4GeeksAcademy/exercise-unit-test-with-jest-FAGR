const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPounds} = require('./app');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    
    console.log(`3.5 euros son ${dollars.toFixed(3)} dólares`);

    // This is the comparison for the unit test
     expect(dollars).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146.261 yens", function() {

    // Use the function like its supposed to be used
    const yenes = fromDollarToYen(3.5);

    // If 1 dolar is 146.261 yenes, then 3,5 dollars should be (3.5 * 146.261)
    const expected = 3.5 * 146.261;
    
    console.log(`3.5 dolares son ${yenes.toFixed(3)} yenes japoneses`);

    // This is the comparison for the unit test
     expect(yenes).toBe(expected); 
})

test("One yen should be 0.00556 pounds", function() {

    // Use the function like its supposed to be used
    const pounds = fromYenToPounds(3.5);

    // If 1 yen is 0.00556 pounds, then 3,5 yenes should be (3.5 * 0.00556)
    const expected = 3.5 * 0.00556;
    
    console.log(`3.5 yenes son ${pounds.toFixed(5)} libras britanicas`);

    // This is the comparison for the unit test
     expect(pounds).toBe(expected); 
})