
let userName = document.querySelector(".fullname")
let cardName = document.querySelector(".cardname")
let userEmail = document.querySelector(".user-email")
let userGit = document.querySelector(".gitname")
 let userImage = document.querySelector("#saved-img")
let uniqueCode = [0, 1, 2, 3, 4, 5, 6]
let locationData = document.getElementById("creation-date")
let storedUserData = localStorage.getItem("user")
let userNumber = document.getElementById("serial-number")

userData = JSON.parse(storedUserData)


userName.textContent = userData.name
cardName.textContent = userData.name
userEmail.textContent = userData.email
userGit.textContent = userData.github
locationData.textContent = "Nov 15, 2025"+ " / " + "Port Harcourt, NG"




function getRandomNumber() {
    return Math.floor(Math.random() * uniqueCode.length)
}

function codeGenerator() {
    let codeCombo = "#"
    for (let i = 0; i < 6; i++) {
        codeCombo += uniqueCode[getRandomNumber()];
        console.log(codeCombo)
    }
     userNumber.textContent = codeCombo
}

window.onload = codeGenerator()

document.addEventListener("DOMContentLoaded", ()=> {
    const recentImageDataUrl = localStorage.getItem("user-img")
    if (recentImageDataUrl) {
        userImage.src = recentImageDataUrl
    }
})


