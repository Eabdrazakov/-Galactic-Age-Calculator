export default class AgeCalculator {
    constructor(age) {
        this.age = age;
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

    pastYearMars() {

    }
}