// Test suite - collection of test cases

// BDD - Behavior Driven Development 

describe ("Test Suite", () => {
    // set of test cases can be written

    // it - plain english it
    // test case
    it ("should add two positive numbers ", () => {
        // assertion or expection
        // expect(actual).toBe(expected)
        // toBe - value/boolean, string, numbers, reference
        // toEqual - list, object, deep compare
        expect(1 + 2).toBe(3)
    })
})