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

    document.getElementById("currentEarth").innerText = `Earth: ${ageCalculator.getAge(currentAge)}`;
    document.getElementById("currentMercury").innerText = `Mercury: ${ageCalculator.mercuryAgeCalculator(currentAge)}`;
    document.getElementById("currentVenus").innerText = `Venus: ${ageCalculator.venusAgeCalculator(currentAge)}`;
    document.getElementById("currentMars").innerText = `Mars: ${ageCalculator.marsAgeCalculator(currentAge)}`;
    document.getElementById("currentJupiter").innerText = `Jupiter: ${ageCalculator.jupiterAgeCalculator(currentAge)}`;

    document.getElementById("pastEarth").innerText = `Earth: ${ageCalculator.pastYearEarth(pastAge)}`;
    document.getElementById("pastMercury").innerText = `Mercury: ${ageCalculator.pastYearMercury(pastAge)}`;
    document.getElementById("pastVenus").innerText = `Venus: ${ageCalculator.pastYearVenus(pastAge)}`;
    document.getElementById("pastMars").innerText = `Mars: ${ageCalculator.pastYearMars(pastAge)}`;
    document.getElementById("pastJupiter").innerText = `Jupiter: ${ageCalculator.pastYearJupiter(pastAge)}`;

    document.getElementById("futureEarth").innerText = `Earth: ${ageCalculator.futureYearEarth(futureAge)}`;
    document.getElementById("futureMercury").innerText = `Mercury: ${ageCalculator.futureYearMercury(futureAge)}`;
    document.getElementById("futureVenus").innerText = `Venus: ${ageCalculator.futureYearVenus(futureAge)}`;
    document.getElementById("futureMars").innerText = `Mars: ${ageCalculator.futureYearMars(futureAge)}`;
    document.getElementById("futureJupiter").innerText = `Jupiter: ${ageCalculator.futureYearJupiter(futureAge)}`;

    document.getElementById("currentDiv").removeAttribute("class", "hidden");
    document.getElementById("pastDiv").removeAttribute("class", "hidden");
    document.getElementById("futureDiv").removeAttribute("class", "hidden");

}

document.getElementById("form").addEventListener("submit", handleForm);
document.getElementById("resetButton").addEventListener("click", () => {
    document.getElementById("form").reset();

    document.getElementById("currentDiv").setAttribute("class", "hidden");
    document.getElementById("pastDiv").setAttribute("class", "hidden");
    document.getElementById("futureDiv").setAttribute("class", "hidden");
});