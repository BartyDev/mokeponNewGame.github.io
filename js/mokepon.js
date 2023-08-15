function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function playStart() {
    loadPage.play()
    setTimeout(() => {
        audioWorld.play()
    }, 5500);

    let chooseYourAtk = document.getElementById("select-atk")
    chooseYourAtk.style.display = "none"

    let sectionRestart = document.getElementById("restart")
    sectionRestart.style.display = "none"

    let buttonPetSelect = document.getElementById("button-pets");
    buttonPetSelect.addEventListener('click', selectPlayerPet);

    let inputFlameon = document.getElementById("Flameon")
    inputFlameon.addEventListener("click", selectMokeponSound)
    let inputKaimander = document.getElementById("Kaimander")
    inputKaimander.addEventListener("click", selectMokeponSound)
    let inputRatuen = document.getElementById("Ratuen")
    inputRatuen.addEventListener("click", selectMokeponSound)
    let inputCondorking = document.getElementById("Condorking")
    inputCondorking.addEventListener("click", selectMokeponSound)
    let inputTormen = document.getElementById("Tormen")
    inputTormen.addEventListener("click", selectMokeponSound)
    let inputRhinordon = document.getElementById("Rhinordon")
    inputRhinordon.addEventListener("click", selectMokeponSound)
    let inputSylphy = document.getElementById("Sylphy")
    inputSylphy.addEventListener("click", selectMokeponSound)
    let inputMinor = document.getElementById("Minor")
    inputMinor.addEventListener("click", selectMokeponSound)

    let buttonFire = document.getElementById("button-fire");
    buttonFire.addEventListener('click', AttackFire);
    let buttonWater = document.getElementById("button-water");
    buttonWater.addEventListener('click', AttackWater);
    let buttonEarth = document.getElementById("button-earth");
    buttonEarth.addEventListener('click', AttackEarth);
    let buttonWind = document.getElementById("button-wind");
    buttonWind.addEventListener('click', AttackWind);
    let buttonThunder = document.getElementById("button-thunder");
    buttonThunder.addEventListener('click', AttackThunder);
    let buttonRestart = document.getElementById("button-restart");
    buttonRestart.addEventListener("click", restartGame)
}

function selectPlayerPet() {
    let chooseYourPet = document.getElementById("select-pet")
    let chooseYourAtk = document.getElementById("select-atk")

    let inputFlameon = document.getElementById("Flameon")
    let inputKaimander = document.getElementById("Kaimander")
    let inputRatuen = document.getElementById("Ratuen")
    let inputCondorking = document.getElementById("Condorking")
    let inputTormen = document.getElementById("Tormen")
    let inputRhinordon = document.getElementById("Rhinordon")
    let inputSylphy = document.getElementById("Sylphy")
    let inputMinor = document.getElementById("Minor")
    let mokeponPlayerName = document.getElementById("mokepon-change")
    let mokeponPlayerImg = document.getElementById("mokepon-change-img")

    let confirm = false;
    clickButton.play();

    if (inputFlameon.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = "Flameon"
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/flameon.gif");
        mokeponPlayerImg.setAttribute("alt", "Flameon")
        mokeponPlayerImg.setAttribute("title", "Flameon")
    } else if (inputKaimander.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = "kaimander"
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/kaimander.gif");
        mokeponPlayerImg.setAttribute("alt", "Kaimander")
        mokeponPlayerImg.setAttribute("title", "Kaimander")
    } else if (inputRatuen.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = "Ratuen"
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/ratuen.gif");
        mokeponPlayerImg.setAttribute("alt", "Ratuen")
        mokeponPlayerImg.setAttribute("title", "Ratuen")
    } else if (inputCondorking.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = "Condorking"
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/condorking2.gif");
        mokeponPlayerImg.setAttribute("alt", "Condorking")
        mokeponPlayerImg.setAttribute("title", "Condorking")
    } else if (inputTormen.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = "Tormen"
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/tormen2.gif");
        mokeponPlayerImg.setAttribute("alt", "Tormen")
        mokeponPlayerImg.setAttribute("title", "Tormen")
    } else if (inputRhinordon.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = "Rhinordon"
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/rhinordon.gif");
        mokeponPlayerImg.setAttribute("alt", "Rhinordon")
        mokeponPlayerImg.setAttribute("title", "Rhinordon")
    } else if (inputSylphy.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = "Sylphy"
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/sylphy.gif");
        mokeponPlayerImg.setAttribute("alt", "Sylphy")
        mokeponPlayerImg.setAttribute("title", "Sylphy")
    } else if (inputMinor.checked) {
        confirm = true;
        mokeponPlayerName.innerHTML = "Minor"
        mokeponPlayerImg.setAttribute("src", "./assets/imgs/minor.gif");
        mokeponPlayerImg.setAttribute("alt", "Minor")
        mokeponPlayerImg.setAttribute("title", "Minor")
    }

    if (confirm) {
        selectEnemyPlayerPet();
        chooseYourPet.style.display = "none"
        audioWorld.pause()
        chooseYourAtk.style.display = "flex"
        audioWorld2.play();
    } else {
        alert("choose your mokepon")
    }
}

function selectEnemyPlayerPet() {
    let enemyPetRandom = aleatorio(1, 8)
    let mokeponEnemyPlayer = document.getElementById("mokepon-change-enemy")
    let mokeponPlayerImg2 = document.getElementById("mokepon-change-img2")

    if (enemyPetRandom == 1) {
        mokeponEnemyPlayer.innerHTML = "Flameon"
        mokeponPlayerImg2.setAttribute("src", "./assets/imgs/flameon.gif");
        mokeponPlayerImg2.setAttribute("alt", "Flameon")
        mokeponPlayerImg2.setAttribute("title", "Flameon")
    } else if (enemyPetRandom == 2) {
        mokeponEnemyPlayer.innerHTML = "Kaimander"
        mokeponPlayerImg2.setAttribute("src", "./assets/imgs/kaimander.gif");
        mokeponPlayerImg2.setAttribute("alt", "Kaimander")
        mokeponPlayerImg2.setAttribute("title", "Kaimander")
    } else if (enemyPetRandom == 3) {
        mokeponEnemyPlayer.innerHTML = "Ratuen"
        mokeponPlayerImg2.setAttribute("src", "./assets/imgs/ratuen.gif");
        mokeponPlayerImg2.setAttribute("alt", "Ratuen")
        mokeponPlayerImg2.setAttribute("title", "Ratuen")
    } else if (enemyPetRandom == 4) {
        mokeponEnemyPlayer.innerHTML = "Condorking"
        mokeponPlayerImg2.setAttribute("src", "./assets/imgs/condorking2.gif");
        mokeponPlayerImg2.setAttribute("alt", "Condorking")
        mokeponPlayerImg2.setAttribute("title", "Condorking")
    } else if (enemyPetRandom == 5) {
        mokeponEnemyPlayer.innerHTML = "Tormen"
        mokeponPlayerImg2.setAttribute("src", "./assets/imgs/tormen2.gif");
        mokeponPlayerImg2.setAttribute("alt", "Tormen")
        mokeponPlayerImg2.setAttribute("title", "Tormen")
    } else if (enemyPetRandom == 6) {
        mokeponEnemyPlayer.innerHTML = "Rhinordon"
        mokeponPlayerImg2.setAttribute("src", "./assets/imgs/rhinordon.gif");
        mokeponPlayerImg2.setAttribute("alt", "Rhinordon")
        mokeponPlayerImg2.setAttribute("title", "Rhinordon")
    } else if (enemyPetRandom == 7) {
        mokeponEnemyPlayer.innerHTML = "Sylphy"
        mokeponPlayerImg2.setAttribute("src", "./assets/imgs/sylphy.gif");
        mokeponPlayerImg2.setAttribute("alt", "Sylphy")
        mokeponPlayerImg2.setAttribute("title", "Sylphy")
    } else {
        mokeponEnemyPlayer.innerHTML = "Minor"
        mokeponPlayerImg2.setAttribute("src", "./assets/imgs/minor.gif");
        mokeponPlayerImg2.setAttribute("alt", "Minor")
        mokeponPlayerImg2.setAttribute("title", "Minor")
    }
}

function AttackFire() {
    flameonMok.play()
    playerAttack = "FIREBALL 🔥"
    setTimeout(() => {
        enemyPetAttack()
    }, 1500);
}

function AttackWater() {
    ratuenMok.play()
    playerAttack = "WATER JET 🌊"
    setTimeout(() => {
        enemyPetAttack()
    }, 1500);
}

function AttackEarth() {
    kaimanderMok.play()
    playerAttack = "GRAVEL STORM 🪨"
    setTimeout(() => {
        enemyPetAttack()
    }, 1500);
}

function AttackWind() {
    silphyMok.play()
    playerAttack = "WIND BLADES 🌪️"
    setTimeout(() => {
        enemyPetAttack()
    }, 1500);
}

function AttackThunder() {
    minorMok.play()
    playerAttack = "THUNDER IMPACT ⚡"
    setTimeout(() => {
        enemyPetAttack()
    }, 1500);
}

function enemyPetAttack() {
    let enemyAttackRandom = aleatorio(1, 5)

    if (enemyAttackRandom == 1) {
        enemyPlayerAttack = "FIREBALL 🔥"
        flameonMok.play()
    } else if (enemyAttackRandom == 2) {
        enemyPlayerAttack = "WATER JET 🌊"
        ratuenMok.play()
    } else if (enemyAttackRandom == 3) {
        enemyPlayerAttack = "GRAVEL STORM 🪨"
        rinhordonMok.play()
    } else if (enemyAttackRandom == 4) {
        enemyPlayerAttack = "WIND BLADES 🌪️"
        condorkingMok.play()
    } else {
        enemyPlayerAttack = "THUNDER IMPACT ⚡"
        tormenMok.play()
    }
    combat();
}

function combat() {

    if (playerAttack == enemyPlayerAttack) {
        setTimeout(() => {
            createMessage("💩 EMPATE 💩")
            mokeponLolSound()
        }, 1000);
    } else if (playerAttack == "FIREBALL 🔥" && (enemyPlayerAttack == "WIND BLADES 🌪️" || enemyPlayerAttack == "GRAVEL STORM 🪨") || playerAttack == "WATER JET 🌊" && (enemyPlayerAttack == "FIREBALL 🔥" || enemyPlayerAttack == "THUNDER IMPACT ⚡") || playerAttack == "GRAVEL STORM 🪨" && (enemyPlayerAttack == "THUNDER IMPACT ⚡" || enemyPlayerAttack == "WATER JET 🌊") || playerAttack == "THUNDER IMPACT ⚡" && (enemyPlayerAttack == "FIREBALL 🔥" || enemyPlayerAttack == "WIND BLADES 🌪️") || playerAttack == "WIND BLADES 🌪️" && (enemyPlayerAttack == "GRAVEL STORM 🪨" || enemyPlayerAttack == "WATER JET 🌊")) {
        setTimeout(() => {
            mokeponWinSound()
            createMessage("🥇 YOU WIN 🥇")
        }, 1200);
        lifeEnemy--
    } else {
        setTimeout(() => {
            mokeponLoseSound()
            createMessage("👊 YOU LOSE 👊")
        }, 1200);
        lifePlayer--
    }
    reviewLives();
}

function createMessage(result) {
    let sectionMessage = document.getElementById("resultBox");
    let sectionAtkPlayer = document.getElementById("atkplayerOneBox");
    let sectionAtkEnemy = document.getElementById("atkplayerTwoBox");

    sectionMessage.innerHTML = `${result}`

    let newText1 = document.createElement("p")
    newText1.innerHTML = `${playerAttack}`

    let newText2 = document.createElement("p")
    newText2.innerHTML = `${enemyPlayerAttack}`

    sectionAtkPlayer.appendChild(newText1);
    sectionAtkEnemy.appendChild(newText2);
}

function winnerLoser(resultTwo) {
    let messageWinner = document.getElementById("resultBox")

    messageWinner.innerHTML = `${resultTwo}`

    let buttonFire = document.getElementById("button-fire");
    buttonFire.disabled = true;
    let buttonWater = document.getElementById("button-water");
    buttonWater.disabled = true;
    let buttonEarth = document.getElementById("button-earth");
    buttonEarth.disabled = true
    let buttonWind = document.getElementById("button-wind");
    buttonWind.disabled = true;
    let buttonThunder = document.getElementById("button-thunder");
    buttonThunder.disabled = true;

    let sectionRestart = document.getElementById("restart")
    sectionRestart.style.display = "block"
}

function reviewLives() {
    let spanLIfePlayer = document.getElementById("life-player")
    let spanLIfeEnemy = document.getElementById("life-enemy")
    let toggleWinLosePlayer = document.getElementById("mokepon-change-img")
    let toggleWinLoseEnemy = document.getElementById("mokepon-change-img2")
    let toogleDead1 = document.getElementById("img-dead1")
    let toogleDead2 = document.getElementById("img-dead2")


    if (lifeEnemy == 2) {
        spanLIfeEnemy.innerHTML = "❤️❤️🖤"
    } else if (lifeEnemy == 1) {
        spanLIfeEnemy.innerHTML = "❤️🖤🖤"
    } else if (lifeEnemy == 0) {
        audioWorld2.pause();
        spanLIfeEnemy.innerHTML = "🖤🖤🖤 ☠️"
        toggleWinLoseEnemy.style.display = "none"
        setTimeout(() => {
            toogleDead2.style.display = "block"
            youWin.play();
            winnerLoser("YOU ARE A WINNER 👑")
        }, 1300);
    }

    if (lifePlayer == 2) {
        spanLIfePlayer.innerHTML = "❤️❤️🖤"
    } else if (lifePlayer == 1) {
        spanLIfePlayer.innerHTML = "❤️🖤🖤"
    } else if (lifePlayer == 0) {
        audioWorld2.pause();
        spanLIfePlayer.innerHTML = "🖤🖤🖤 ☠️"
        toggleWinLosePlayer.style.display = "none"
        setTimeout(() => {
            toogleDead1.style.display = "block"
            youLose.play();
            winnerLoser("GAME OVER 💀")
        }, 1300);
    }
}

function restartGame() {
    restartButton.play()
    setTimeout(() => {
        location.reload()
    }, 2000);
    ;
}

function selectMokeponSound() {
    selectMokpeon.play()
}

function mokeponLolSound() {
   lolF.play();
}

function mokeponWinSound(){
    yesWinner.play()
}

function mokeponLoseSound(){
    yesLoser.play()
}

let playerAttack;
let enemyPlayerAttack;
let lifeEnemy = 3;
let lifePlayer = 3;

let audioWorld = new Audio("./assets/audio/primerapantalla.mp3")
let audioWorld2 = new Audio("./assets/audio/segundapantalla.mp3")
let clickButton = new Audio("./assets/audio/clickbotones.mp3")
let selectMokpeon = new Audio("./assets/audio/escogesmokepon2.mp3")
let youWin = new Audio("./assets/audio/ganaste.mp3")
let youLose = new Audio("./assets/audio/gameovermokepon.mp3")
let restartButton = new Audio("./assets/audio/botonreiniciar.mp3")
let flameonMok = new Audio("./assets/audio/flameon.mp3")
let condorkingMok = new Audio("./assets/audio/condorking.mp3")
let silphyMok = new Audio("./assets/audio/silphy.mp3")
let ratuenMok = new Audio("./assets/audio/ratuen.mp3")
let tormenMok = new Audio("./assets/audio/tormen.mp3")
let minorMok = new Audio("./assets/audio/minor.mp3")
let rinhordonMok = new Audio("./assets/audio/rihordon.mp3")
let kaimanderMok = new Audio("./assets/audio/kaimanderl.mp3")
let loadPage = new Audio("assets/audio/comenzamos.mp3")
let yesWinner = new Audio("assets/audio/yeswin.mp3")
let yesLoser = new Audio("assets/audio/golpeperdiste.mp3")
let lolF = new Audio("assets/audio/empate.mp3")
/* let errorMok = new Audio("asstes/audio/escogesmokepon.mp3") */
/* let cursorEffects = new Audio("./assets/audio/sonidocursor.mp3") */

window.addEventListener("load", function () {
    setTimeout(() => {
        this.document.getElementById("loader").classList.toggle("loader2")
    }, 5000)
    playStart();
}
)