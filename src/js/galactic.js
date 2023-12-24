export default class AgeCalculator {
    constructor(age) {
        this.age = age;
    }

    getAge() {
        const age = this.age;
        return age;
    }

    mercuryAgeCalculator() {
        return Math.floor(this.age / 0.24);
    }

    venusAgeCalculator() {
        return Math.floor(this.age / 0.62);
    }

    marsAgeCalculator() {
        return Math.floor(this.age / 1.88);
    }

    jupiterAgeCalculator() {
        return Math.floor(this.age / 11.86);
    }

    pastYearEarth(pastBirthAge) {
        return this.age - pastBirthAge;
    }

    pastYearMercury(pastBirthAge) {
        return this.mercuryAgeCalculator() - Math.trunc(pastBirthAge / 0.24);
    }

    pastYearVenus(pastBirthAge) {
        const venus = this.venusAgeCalculator();
        const truncedAge = Math.trunc(pastBirthAge / 0.62);
        const result = venus - truncedAge;
        return result;
    }

    pastYearMars(pastBirthAge) {
        const mars = this.marsAgeCalculator();
        const truncedAge = Math.trunc(pastBirthAge / 1.88);
        const result = mars - truncedAge;

        return result;
    }

    pastYearJupiter(pastBirthAge) {
        const jupiter = this.jupiterAgeCalculator();
        const truncedAge = Math.trunc(pastBirthAge / 11.86);
        const result = jupiter - truncedAge;

        return result;
    }

    futureYearEarth(futureBirthAge) {
        return futureBirthAge - this.age;
    }

    futureYearMercury(futureBirthAge) {
        const mercury = this.mercuryAgeCalculator();
        const truncedAge = Math.trunc(futureBirthAge / 0.24);
        const result = truncedAge - mercury;

        return result;
    }

    futureYearVenus(futureBirthAge) {
        const venus = this.venusAgeCalculator();
        const truncedAge = Math.trunc(futureBirthAge / 0.62);
        const result = truncedAge - venus;

        return result;
    }

    futureYearMars(futureBirthAge) {
        const mars = this.marsAgeCalculator();
        const truncedAge = Math.trunc(futureBirthAge / 1.88);
        const result = truncedAge - mars;

        return result;
    }

    futureYearJupiter(futureBirthAge) {
        const jupiter = this.jupiterAgeCalculator();
        const truncedAge = Math.trunc(futureBirthAge / 11.86);
        const result = truncedAge - jupiter;

        return result;
    }
}