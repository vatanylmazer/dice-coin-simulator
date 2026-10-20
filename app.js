const coinTab = document.getElementById("coinTab");
const diceTab = document.getElementById("diceTab");
const coinSection = document.getElementById("coinSection");
const diceSection = document.getElementById("diceSection");

// Sekme Değiştirme
coinTab.addEventListener("click", () => {
    coinTab.classList.add("active");
    diceTab.classList.remove("active");
    coinSection.classList.add("active");
    diceSection.classList.remove("active");
});

diceTab.addEventListener("click", () => {
    diceTab.classList.add("active");
    coinTab.classList.remove("active");
    diceSection.classList.add("active");
    coinSection.classList.remove("active");
});

// Yazı Tura Mantığı
const flipCoinBtn = document.getElementById("flipCoinBtn");
const coinVisual = document.getElementById("coinVisual");
const headCountElem = document.getElementById("headCount");
const tailCountElem = document.getElementById("tailCount");

let heads = 0;
let tails = 0;

flipCoinBtn.addEventListener("click", () => {
    coinVisual.style.transform = "rotateY(360deg)";
    setTimeout(() => coinVisual.style.transform = "none", 300);

    const isHeads = Math.random() < 0.5;
    if (isHeads) {
        heads++;
        coinVisual.textContent = "T"; // Tura
        headCountElem.textContent = heads;
    } else {
        tails++;
        coinVisual.textContent = "Y"; // Yazı
        tailCountElem.textContent = tails;
    }
});

// Zar Atma Mantığı
const rollDiceBtn = document.getElementById("rollDiceBtn");
const diceVisual = document.getElementById("diceVisual");
const totalRollsElem = document.getElementById("totalRolls");
const diceResultElem = document.getElementById("diceResult");

const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
let totalRolls = 0;

rollDiceBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * 6);
    totalRolls++;

    diceVisual.textContent = diceFaces[randomIndex];
    totalRollsElem.textContent = totalRolls;
    diceResultElem.textContent = randomIndex + 1;
});