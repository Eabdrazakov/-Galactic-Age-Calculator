import AgeCalculator from './../src/js/galactic.js';

describe('AgeCalculator', () => {

    test('should correctly create an age calculator object', () => {
        const ageCalculator = new AgeCalculator(21);
        expect(ageCalculator.age).toEqual(21);
    });
});