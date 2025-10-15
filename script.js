let emailErrorMessage = document.getElementById("email-error")
let nameInput = document.querySelector(".fullname")
let emailInput = document.querySelector(".email")
let gitInput = document.getElementById("git-id")
let genBtn = document.querySelector("#gen-button")
let imgBtn = document.querySelectorAll(".img-btn")
let output = document.getElementById("img-output")
let imageUpload = document.getElementById("customFile")
let userData = {name: nameInput.value,
    email: emailInput.value,
    github: gitInput.value
 }
let userImg = document.querySelector("#customFile")


imageUpload.addEventListener("change", (e)=> {
const file = e.target.files[0]
if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
        output.src = e.target.result
       localStorage.setItem("user-img", reader.result)
    }
    reader.readAsDataURL(file)
    
}

})

// let loadFile = function (event) {
//     const file = event.target.files[0]
//     if(file) {
//         const reader = new FileReader()
//         reader.onload = (event) => {
//             output.src = event.target.result
//         }
//         reader.readAsDataURL(file)
//     }
//      output.src = URL.createObjectURL(event.target.files[0])
//     output.onload = function() {
//         URL.revokeObjectURL(output.src)
//     }

// }

// function saveImage () {
//     const file = imageUpload.files[0]
//     if (file) {
//         const reader = new FileReader()
//         reader.onload = (e) => {
//             const base64string = e.target.result
//             localStorage.setItem("user-image", base64string)
        
//         }
//     }
// }



imgBtn.forEach( function (btn) {
    btn.addEventListener("click", (e)=>{
const select = e.currentTarget.classList
if (select.contains("remove")) {
 output.remove()
} else if (select.contains("change")) {
output.src = ""
}
    })
})

localStorage.setItem("user", JSON.stringify(userData))






genBtn.addEventListener("click", ()=> {
if (userData.name === "" || userData.email === "" || userData.github === "") {
emailInput.style.borderColor = "firebrick"
nameInput.style.borderColor = "firebrick"
gitInput.style.borderColor = "firebrick"
} else {
window.location.href = "index.html"



}   
})






