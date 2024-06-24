let homeScoreEl = document.getElementById("homescore-el")
let guestScoreEl = document.getElementById("guestscore-el")

function homeAdd1(){
    let homeScore = parseInt(homeScoreEl.textContent,10)
    homeScoreEl.textContent = homeScore + 1
}

function homeAdd2(){
    let homeScore = parseInt(homeScoreEl.textContent,10)
    homeScoreEl.textContent = homeScore + 2
}

function homeAdd3(){
    let homeScore = parseInt(homeScoreEl.textContent,10)
    homeScoreEl.textContent = homeScore + 3
}

function guestAdd1(){
    let guestScore = parseInt(guestScoreEl.textContent,10)
    guestScoreEl.textContent = guestScore + 1
}

function guestAdd2(){
    let guestScore = parseInt(guestScoreEl.textContent,10)
    guestScoreEl.textContent = guestScore + 2
}

function guestAdd3(){
    let guestScore = parseInt(guestScoreEl.textContent,10)
    guestScoreEl.textContent = guestScore + 3
}

function newGame(){
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}