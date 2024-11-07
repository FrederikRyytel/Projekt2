let score = 0;
let clickPower = 1;
const upgrades = [
    { cost: 100, power: 2, purchased: false, element: document.getElementById("upgrade1") },
    { cost: 500, power: 5, purchased: false, element: document.getElementById("upgrade2") },
    { cost: 1300, power: 10, purchased: false, element: document.getElementById("upgrade3") },
    { cost: 4000, power: 20, purchased: false, element: document.getElementById("upgrade4") },
    { cost: 10000, power: 40, purchased: false, element: document.getElementById("upgrade5") }
];
const scoreDisplay = document.getElementById("score");
const clickButton = document.getElementById("clickButton");

// Alguses määrame, et näidatakse ainult ühte rinda
clickButton.classList.add("single-boob");

clickButton.addEventListener("click", () => {
    score += clickPower;
    scoreDisplay.textContent = score;
    checkUpgrades();
});

function checkUpgrades() {
    upgrades.forEach((upgrade, index) => {
        if (!upgrade.purchased && score >= upgrade.cost) {
            upgrade.element.disabled = false;
            upgrade.element.style.cursor = "pointer";
        }
    });
}

// Lisame event listener iga upgrade'i nupule
upgrades.forEach((upgrade, index) => {
    upgrade.element.addEventListener("click", () => {
        if (score >= upgrade.cost && !upgrade.purchased) {
            score -= upgrade.cost;
            clickPower += upgrade.power;
            upgrade.purchased = true;
            upgrade.element.disabled = true;
            upgrade.element.style.cursor = "not-allowed";
            scoreDisplay.textContent = score;

            // Kui viimane upgrade ostetakse (2 tissi), muudame pildi täissuurusesse
            if (index === upgrades.length - 1) {
                clickButton.classList.remove("single-boob");
                clickButton.classList.add("double-boob");
            }
        }
    });
});