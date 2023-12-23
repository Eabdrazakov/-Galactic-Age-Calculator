import AgeCalculator from './../src/js/galactic.js';

describe('AgeCalculator', () => {

    test('should correctly create an age calculator object', () => {
        const ageCalculator = new AgeCalculator(21);
        expect(ageCalculator.age).toEqual(21);
    });

    test('should correctly calculate the age on Mercury', () => {
        const ageCalculator = new AgeCalculator(21);
        expect(ageCalculator.mercuryAgeCalculator()).toEqual(87);
    });

    test('should correctly calculate the age on Venus', () => {
        const ageCalculator = new AgeCalculator(21);
        expect(ageCalculator.venusAgeCalculator()).toEqual(33);
    });
});