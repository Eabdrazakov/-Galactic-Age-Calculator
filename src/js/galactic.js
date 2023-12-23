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
}