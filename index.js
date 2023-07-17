


let form = document.querySelector(".form")

form.addEventListener("click", function (e) {
    e.preventDefault()
    let div = document.createElement("div")
    let first_name = document.querySelector("#fname")
    let last_name = document.querySelector("#lname")
    let container = document.querySelector(".task-container")
    div.textContent = "hellooo"
    div.classList.add("blocks")
    container.appendChild(div)
})