console.log("Entro al main.js");

// localStorage.setItem("colorPage", "green");

// let cat = localStorage.getItem("miGato");
// let color = localStorage.getItem("colorPage");

// titulo.style.color = color;

// localStorage.removeItem("miGato");

let names = [];
let previousName = "";
let editing = false;



const nameInput = document.getElementById("nameInput");
const list = document.getElementById("list");

function addName() {
    const name = nameInput.value
    if(editing == true) {
        //edición
    } else{
        names.push(name);
        localStorage.setItem("names", JSON.stringify(names));
        nameInput.value = "";
        listUpdate();
        console.log(names);
    }
}

function listUpdate() {
    // console.log("Update");
    list.innerHTML = "";
    names.forEach(name => {
        const li =document.createElement("li");
        li.textContent = name;
        li.classList.add("list-group-item")
        list.appendChild(li);
    })
}

function cleanStorage() {
    localStorage.clear();
    names = [];
    console.log(names);
}