# Super Galactic Age Calculator

<h3>By Ermek Abdrazakov</h3>

<p>The Super Galactic Age Calculator is a command-line application designed to calculate a user's age on different planets based on the length of a solar year on each planet. The user provides their age in Earth years, and the application converts this age into the equivalent age on Mercury, Venus, Mars, Jupiter, and Saturn.</p>

<h3> Link to site on Github Pages:</h3>

_[GitHub page link](https://github.com/Eabdrazakov)_


## Technologies Used
* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _Test-Driven Development_
* _Visual Studio Code_
* _GIT_
* _Node.js and npm_
* _npm Packages_
* _Linter(ESLint)_
* _Testing Framework(Jest)_


## Setup/Installation Requirements

<p>To get started, open your terminal or command promt and use the following command to do so:</p>

* _1. Clone this repository to your desktop._
* _2. Navigate to the top level of the directory._
* _3. Right-click on `index.html`._
* _4. Install all packages with `$ npm install`._
* _5. Building the project using webpack with `$ npm run build`._
* _6. Starting a development server with `$ npm run start`._
* _7. Linting JS files in the `src` folder with `$ npm run lint`._
* _8. Running tests with Jest using `$ npm run test`._

## Test 

```
describe('AgeCalculator', () => {

    test('should correctly create an age calculator object', () => {
        const ageCalculator = new AgeCalculator(21);
        expect(ageCalculator.getAge()).toEqual(21);
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

    test('should correctly calculate how many years have yet to pass until a future birthday on Venus', () => {
        const ageCalculator = new AgeCalculator(56);
        const futureBirthAge = 61;
        const result = ageCalculator.futureYearVenus(futureBirthAge);
        expect(result).toEqual(8);
    });

    test('should correctly calculate how many years have yet to pass until a future birthday on Mars', () => {
        const ageCalculator = new AgeCalculator(56);
        const futureBirthAge = 61;
        const result = ageCalculator.futureYearMars(futureBirthAge);
        expect(result).toEqual(3);
    });

    test('should correctly calculate how many years have yet to pass until a future birthday on Jupiter', () => {
        const ageCalculator = new AgeCalculator(56);
        const futureBirthAge = 61;
        const result = ageCalculator.futureYearJupiter(futureBirthAge);
        expect(result).toEqual(1);
    });
});


```
## Known Bugs
* _No known issues._

## Description

_This website created using HTML, CSS, Bootstrap and JavaScript technologies._

## Link to this application:

_[Open]()_

## Contact information

_[Linkedin](https://www.linkedin.com/in/ermek-abdrazakov-3b9301275/)_

## License

_[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://en.wikipedia.org/wiki/MIT_License)_


Copyright (c) _2023_ _Ermek Abdrazakov_