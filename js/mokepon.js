const chooseYourAtk = document.getElementById("select-atk")
const sectionRestart = document.getElementById("restart")
const buttonPetSelect = document.getElementById("button-pets");
const buttonRestart = document.getElementById("button-restart");


const chooseYourPet = document.getElementById("select-pet")
const mokeponPlayerName = document.getElementById("mokepon-change")
const mokeponPlayerImg = document.getElementById("mokepon-change-img")


const mokeponEnemyPlayer = document.getElementById("mokepon-change-enemy")
const mokeponPlayerImg2 = document.getElementById("mokepon-change-img2")


const sectionMessage = document.getElementById("resultBox");
const sectionAtkPlayer = document.getElementById("atkplayerOneBox");
const sectionAtkEnemy = document.getElementById("atkplayerTwoBox");


const spanLIfePlayer = document.getElementById("life-player")
const spanLIfeEnemy = document.getElementById("life-enemy")


const toogleDead1 = document.getElementById("img-dead1")
const toogleDead2 = document.getElementById("img-dead2")

const contentBox = document.getElementById("card-box")

const contentBoxButtons = document.getElementById("box-button")


let mokepons = [];
let playerAttack = [];
let enemyPlayerAttack = [];

let mokeponOptions;
let attacksOptions;

let enemyAttack;
let enemyAttackRandom;

let inputRatuen;
let inputTormen;
let inputSylphy;

let mokeponChosed;
let buttonsChoice = []

let enemyAttackVar
let playerAttackVar

let lifeEnemy = 3;
let lifePlayer = 3;


let audioWorld = new Audio("./assets/audio/primerapantalla.mp3")
let audioWorld2 = new Audio("./assets/audio/segundapantalla.mp3")
let clickButton = new Audio("./assets/audio/clickbotones.mp3")
let selectMokpeon = new Audio("./assets/audio/escogesmokepon2.mp3")
let youWin = new Audio("./assets/audio/ganaste.mp3")
let youLose = new Audio("./assets/audio/gameovermokepon.mp3")
let restartButton = new Audio("./assets/audio/botonreiniciar.mp3")
let silphyMok = new Audio("./assets/audio/silphy.mp3")
let ratuenMok = new Audio("./assets/audio/ratuen.mp3")
let tormenMok = new Audio("./assets/audio/tormen.mp3")
let loadPage = new Audio("assets/audio/comenzamos.mp3")
let yesWinner = new Audio("assets/audio/yeswin.mp3")
let yesLoser = new Audio("assets/audio/golpeperdiste.mp3")
let lolF = new Audio("assets/audio/empate.mp3")


class Mokepon {
    constructor(name, subname, picture, life) {
        this.name = name
        this.subname = subname
        this.picture = picture
        this.life = life
        this.attacks = []
    }
}

let ratuen = new Mokepon('Ratuen', 'ラトエン', './assets/imgs/ratuen.gif', 3)
let tormen = new Mokepon('Tormen', 'トーメン', './assets/imgs/tormen22.gif', 3)
let sylphy = new Mokepon('Sylphy', 'シルフィ', './assets/imgs/sylphy2.gif', 3)

ratuen.attacks.push(
    { name: 'confusion 🌀', id: 'button-psychic' },
    { name: 'flame 🔥', id: 'button-fire' },
    { name: 'jet 💧', id: 'button-water' },
    { name: '🌀🌀', id: 'button-psychic' },
)

tormen.attacks.push(
    { name: 'jet 💧', id: 'button-water' },
    { name: 'flame 🔥', id: 'button-fire' },
    { name: 'poison 🍄', id: 'button-poison' },
    { name: '💧💧', id: 'button-water' }
)

sylphy.attacks.push(
    { name: 'whip 🌱', id: 'button-plant' },
    { name: 'poison 🍄', id: 'button-poison' },
    { name: 'confusion 🌀', id: 'button-psychic' },
    { name: 'jet 💧', id: 'button-water' },
    { name: '🌱🌱', id: 'button-plant' }
)

mokepons.push(ratuen, tormen, sylphy)

function playStart() {

    setTimeout(() => {
        audioWorld.play()
    }, 5500);

    chooseYourAtk.style.display = "none"
    sectionRestart.style.display = "none"

    mokepons.forEach((mokepon) => {
        mokeponOptions = `
            <input type="radio" name="pets" id=${mokepon.name} />
            <label class="card-of-mokepon" for=${mokepon.name} id="labell">
                <!--<p>フラメオン</p>-->
                <p>${mokepon.subname}</p>
                <img src=${mokepon.picture} alt=${mokepon.name} title=${mokepon.name} loading="lazy">
            </label>
    `
        contentBox.innerHTML += mokeponOptions
    })

    inputRatuen = document.getElementById("Ratuen")
    inputTormen = document.getElementById("Tormen")
    inputSylphy = document.getElementById("Sylphy")

    buttonPetSelect.addEventListener('click', selectPlayerPet);

    inputRatuen.addEventListener("click", selectMokeponSound)
    inputTormen.addEventListener("click", selectMokeponSound)
    inputSylphy.addEventListener("click", selectMokeponSound)

    buttonRestart.addEventListener("click", restartGame)
}

function selectPlayerPet() {

    let confirm = false;

    if (inputRatuen.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = inputRatuen.id
        mokeponChosed = inputRatuen.id
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/ratuen.gif");
        mokeponPlayerImg.setAttribute("alt", "Ratuen")
        mokeponPlayerImg.setAttribute("title", "Ratuen")
    } else if (inputTormen.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = inputTormen.id
        mokeponChosed = inputTormen.id
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/tormen22.gif");
        mokeponPlayerImg.setAttribute("alt", "Tormen")
        mokeponPlayerImg.setAttribute("title", "Tormen")
    } else if (inputSylphy.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = inputSylphy.id
        mokeponChosed = inputSylphy.id
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/sylphy2.gif");
        mokeponPlayerImg.setAttribute("alt", "Sylphy")
        mokeponPlayerImg.setAttribute("title", "Sylphy")
    }
    if (confirm) {
        clickButton.play();
        attackGroup(mokeponChosed)
        selectEnemyPlayerPet();
        chooseYourPet.style.display = "none"
        audioWorld.pause()
        chooseYourAtk.style.display = "flex"
        audioWorld2.play();
    } else {
        clickButton.play();
        alert("choose your mokepon")
    }
}

function attackGroup(mokeponChosed) {
    let buttonsAttacks

    for (let i = 0; i < mokepons.length; i++) {

        if (mokeponChosed === mokepons[i].name) {
            buttonsAttacks = mokepons[i].attacks
        }
    }
    buttonsAttacksPrint(buttonsAttacks)
}

function buttonsAttacksPrint(buttonsAttacks) {

    buttonsAttacks.forEach((attack) => {
        attacksOptions = `
        <button id=${attack.id} class="buttons-atks BChoice" title=${attack.id}> <span>${attack.name}</span></button>
        `
        contentBoxButtons.innerHTML += attacksOptions
    });

    buttonsChoice = document.querySelectorAll(".BChoice")
}

function attacksSequence() {
    buttonsChoice.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.textContent === 'flame 🔥') {
                playerAttack.push("FIREBALL 🔥")
                ratuenMok.play()
                btn.style.background = "#112f58"
            } else if (e.target.textContent === 'jet 💧') {
                playerAttack.push("WATER JET 💦")
                tormenMok.play()
            } else if (e.target.textContent === '💧💧') {
                playerAttack.push("HYDROPUMP 🌊")
                tormenMok.play()
            } else if (e.target.textContent === 'whip 🌱') {
                playerAttack.push("RAZOR BLADES 🌱")
                silphyMok.play()
            } else if (e.target.textContent === '🌱🌱') {
                playerAttack.push("SOLAR CANNON ☀️")
                silphyMok.play()
            } else if (e.target.textContent === 'confusion 🌀') {
                playerAttack.push("CONFUSION 🌀")
                ratuenMok.play()
            } else if (e.target.textContent === '🌀🌀') {
                playerAttack.push("TELEKINESIS 🌀")
                ratuenMok.play()
            } else {
                playerAttack.push("POISON 🍄")
                silphyMok.play()
            }
            playerAttackVar = playerAttack.toString()
            enemyPetAttack()
        })
    })
}

function selectEnemyPlayerPet() {
    let enemyPetRandom = aleatorio(0, mokepons.length - 1)
    mokeponEnemyPlayer.innerHTML = mokepons[enemyPetRandom].name
    enemyAttack = mokepons[enemyPetRandom].attacks
    mokeponPlayerImg2.setAttribute('src', mokepons[enemyPetRandom].picture)
    mokeponPlayerImg2.setAttribute("alt", mokepons[enemyPetRandom].name)
    mokeponPlayerImg2.setAttribute("title", mokepons[enemyPetRandom].name)
    attacksSequence()
}

function enemyPetAttack() {
    enemyAttackRandom = aleatorio(0, enemyAttack.length - 1)

    if (enemyAttack[enemyAttackRandom].name === 'flame 🔥') {
        enemyPlayerAttack.push("FIREBALL 🔥")
        ratuenMok.play()
    } else if (enemyAttack[enemyAttackRandom].name === 'jet 💧') {
        enemyPlayerAttack.push("WATER JET 💦")
        tormenMok.play()
    } else if (enemyAttack[enemyAttackRandom].name === '💧💧') {
        enemyPlayerAttack.push("HYDROPUMP 🌊")
        tormenMok.play()
    } else if (enemyAttack[enemyAttackRandom].name === 'whip 🌱') {
        enemyPlayerAttack.push("RAZOR BLADES 🌱")
        silphyMok.play()
    } else if (enemyAttack[enemyAttackRandom].name === '🌱🌱') {
        enemyPlayerAttack.push("SOLAR CANNON ☀️")
        silphyMok.play()
    } else if (enemyAttack[enemyAttackRandom].name === 'confusion 🌀') {
        enemyPlayerAttack.push("CONFUSION 🌀")
        ratuenMok.play()
    } else if (enemyAttack[enemyAttackRandom].name === '🌀🌀') {
        enemyPlayerAttack.push("TELEKINESIS 🌀")
        ratuenMok.play()
    } else {
        enemyPlayerAttack.push("POISON 🍄")
        silphyMok.play()
    }
    enemyAttackVar = enemyPlayerAttack.toString()
    combat()
}

function combat() {
    if (playerAttackVar === enemyAttackVar) {
        setTimeout(() => {
            createMessage("💩 EMPATE 💩")
            lolF.play();
        }, 1000);
    } else if (playerAttackVar === "FIREBALL 🔥" && (enemyAttackVar === "SOLAR CANNON ☀️" || enemyAttackVar === "RAZOR BLADES 🌱" || enemyAttackVar === "POISON 🍄") || (playerAttackVar === "WATER JET 💦" || playerAttackVar === "HYDROPUMP 🌊") && (enemyAttackVar === "FIREBALL 🔥" || enemyAttackVar === "POISON 🍄") || (playerAttackVar === "RAZOR BLADES 🌱" || playerAttackVar === "SOLAR CANNON ☀️") && (enemyAttackVar === "WATER JET 💦" || enemyAttackVar === "HYDROPUMP 🌊" || enemyAttackVar === "CONFUSION 🌀" || enemyAttackVar === "TELEKINESIS 🌀") || (playerAttackVar === "CONFUSION 🌀" || playerAttackVar === "TELEKINESIS 🌀") && (enemyAttackVar === "WATER JET 💦" || enemyAttackVar === "HYDROPUMP 🌊" || enemyAttackVar === "FIREBALL 🔥") || playerAttackVar === "POISON 🍄" && (enemyAttackVar === "CONFUSION 🌀" || enemyAttackVar === "TELEKINESIS 🌀" || enemyAttackVar === "RAZOR BLADES 🌱" || enemyAttackVar === "SOLAR CANNON ☀️")) {
        setTimeout(() => {
            createMessage("🥇 YOU WIN 🥇")
            yesWinner.play()
        }, 1200);
        lifeEnemy--
    } else {
        setTimeout(() => {
            createMessage("👊 YOU LOSE 👊")
            yesLoser.play()
        }, 1200);
        lifePlayer--
    }
    reviewLives();
    playerAttack = []
    enemyPlayerAttack = []
}

function createMessage(result) {

    sectionMessage.innerHTML = result
    let newText1 = document.createElement("p")
    newText1.innerHTML = playerAttackVar

    let newText2 = document.createElement("p")
    newText2.innerHTML = enemyAttackVar

    sectionAtkPlayer.appendChild(newText1);
    sectionAtkEnemy.appendChild(newText2);
}

function reviewLives() {

    if (lifeEnemy == 2) {
        spanLIfeEnemy.innerHTML = "❤️❤️🖤"
    } else if (lifeEnemy == 1) {
        spanLIfeEnemy.innerHTML = "❤️🖤🖤"
    } else if (lifeEnemy == 0) {
        audioWorld2.pause();
        spanLIfeEnemy.innerHTML = "🖤🖤🖤 ☠️"
        mokeponPlayerImg2.style.display = "none"
        setTimeout(() => {
            toogleDead2.style.display = "block"
            youWin.play();
            winnerLoser("YOU ARE A WINNER 👑")
        }, 1500);
    }

    if (lifePlayer == 2) {
        spanLIfePlayer.innerHTML = "❤️❤️🖤"
    } else if (lifePlayer == 1) {
        spanLIfePlayer.innerHTML = "❤️🖤🖤"
    } else if (lifePlayer == 0) {
        audioWorld2.pause();
        spanLIfePlayer.innerHTML = "🖤🖤🖤 ☠️"
        mokeponPlayerImg.style.display = "none"
        setTimeout(() => {
            toogleDead1.style.display = "block"
            youLose.play();
            winnerLoser("GAME OVER 💀")
        }, 1500);
    }
}

function winnerLoser(resultTwo) {

    sectionMessage.innerHTML = resultTwo

    contentBoxButtons.style.display = "none"

    setTimeout(() => {
        sectionRestart.style.display = "block"
    }, 2500);
}

function restartGame() {
    restartButton.play()
    setTimeout(() => {
        location.reload()
    }, 1500);
    ;
}

function selectMokeponSound() {
    selectMokpeon.play()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", function () {
    setTimeout(() => {
        this.document.getElementById("loader").classList.toggle("loader2")

    }, 5000)
    loadPage.play()
    playStart();
}
)