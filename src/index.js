import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalculator from './js/galactic.js';


function handleForm(e) {
    e.preventDefault();
    const currentAge = document.getElementById("currentAge").value;
    const pastAge = document.getElementById("pastAge").value;
    const futureAge = document.getElementById("futureAge").value;
    const ageCalculator = new AgeCalculator(parseInt(currentAge));

    document.getElementById("currentEarth").innerText = `Current age on Earth: ${ageCalculator.getAge(currentAge)}`;
    document.getElementById("currentMercury").innerText = `Current age on Mercury: ${ageCalculator.mercuryAgeCalculator(currentAge)}`;
    document.getElementById("currentVenus").innerText = `Current age on Venus: ${ageCalculator.venusAgeCalculator(currentAge)}`;
    document.getElementById("currentMars").innerText = `Current age on Mars: ${ageCalculator.marsAgeCalculator(currentAge)}`;
    document.getElementById("currentJupiter").innerText = `Current age on Jupiter: ${ageCalculator.jupiterAgeCalculator(currentAge)}`;

    document.getElementById("pastEarth").innerText = `Years have passed since the birthday on Earth: ${ageCalculator.pastYearEarth(pastAge)}`;
    document.getElementById("pastMercury").innerText = `Years have passed since the birthday on Mercury: ${ageCalculator.pastYearMercury(pastAge)}`;
    document.getElementById("pastVenus").innerText = `Years have passed since the birthday on Venus: ${ageCalculator.pastYearVenus(pastAge)}`;
    document.getElementById("pastMars").innerText = `Years have passed since the birthday on Mars: ${ageCalculator.pastYearMars(pastAge)}`;
    document.getElementById("pastJupiter").innerText = `Years have passed since the birthday on Jupiter: ${ageCalculator.pastYearJupiter(pastAge)}`;

    document.getElementById("futureEarth").innerText = `Years until your future birthday on Earth: ${ageCalculator.futureYearEarth(futureAge)}`;
    document.getElementById("futureMercury").innerText = `Years until your future birthday on Mercury: ${ageCalculator.futureYearMercury(futureAge)}`;
    document.getElementById("futureVenus").innerText = `Years until your future birthday on Venus: ${ageCalculator.futureYearVenus(futureAge)}`;
    document.getElementById("futureMars").innerText = `Years until your future birthday on Mars: ${ageCalculator.futureYearMars(futureAge)}`;
    document.getElementById("futureJupiter").innerText = `Years until your future birthday on Jupiter: ${ageCalculator.futureYearJupiter(futureAge)}`;

    document.getElementById("currentDiv").removeAttribute("class", "hidden");
    document.getElementById("pastDiv").removeAttribute("class", "hidden");
    document.getElementById("futureDiv").removeAttribute("class", "hidden");

}

document.getElementById("form").addEventListener("submit", handleForm);