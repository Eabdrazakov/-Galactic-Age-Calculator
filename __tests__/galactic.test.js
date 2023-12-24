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

    test('should correctly calculate the age on Mars', () => {
        const ageCalculator = new AgeCalculator(21);
        expect(ageCalculator.marsAgeCalculator()).toEqual(11);
    });

    test('should correctly calculate the age on Jupiter', () => {
        const ageCalculator = new AgeCalculator(21);
        expect(ageCalculator.jupiterAgeCalculator()).toEqual(1);
    });

    test('should correctly calculate how many years have passed a user age on Earth', () => {
        const ageCalculator = new AgeCalculator(45);
        const pastBirthAge = 33;
        const result = ageCalculator.pastYearEarth(pastBirthAge);
        expect(result).toEqual(12);
    });

    test('should correctly calculate how many years have passed a user age on Mercury', () => {
        const ageCalculator = new AgeCalculator(45);
        const pastBirthAge = 33;
        const result = ageCalculator.pastYearMercury(pastBirthAge);
        expect(result).toEqual(50);
    });

    test('should correctly calculate how many years have passed a user age on Venus', () => {
        const ageCalculator = new AgeCalculator(45);
        const pastBirthAge = 33;
        const result = ageCalculator.pastYearVenus(pastBirthAge);
        expect(result).toEqual(19);
    });

    test('should correctly calculate how many years have passed a user age on Mars', () => {
        const ageCalculator = new AgeCalculator(45);
        const pastBirthAge = 33;
        const result = ageCalculator.pastYearMars(pastBirthAge);
        expect(result).toEqual(6);
    });

    test('should correctly calculate how many years have passed a user age on Jupiter', () => {
        const ageCalculator = new AgeCalculator(45);
        const pastBirthAge = 33;
        const result = ageCalculator.pastYearJupiter(pastBirthAge);
        expect(result).toEqual(1);
    });

    test('should correctly calculate how many years have yet to pass until a future birthday on Earth', () => {
        const ageCalculator = new AgeCalculator(56);
        const futureBirthAge = 61;
        const result = ageCalculator.futureYearEarth(futureBirthAge);
        expect(result).toEqual(5);
    });

    test('should correctly calculate how many years have yet to pass until a future birthday on Mercury', () => {
        const ageCalculator = new AgeCalculator(56);
        const futureBirthAge = 61;
        const result = ageCalculator.futureYearMercury(futureBirthAge);
        expect(result).toEqual(21);
    });
});