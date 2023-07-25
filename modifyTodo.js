import { DeleteThings } from "./index.js";

export const  modifybutton = (inputName,ogArray) =>{

    // creating form and appending it
    const main = document.querySelector(".blocks-neo");
    const form = document.createElement("form");
    const formDiv0 = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input")
    const submit = document.createElement("button")
    
    main.appendChild(form);
    form.classList.add("form");
    form.appendChild(formDiv0);
    
    
    // label 
    formDiv0.appendChild(label);
    label.textContent = "Name:";
    label.for = "name"
    
    // input 
    formDiv0.appendChild(input)
    input.type = "text"
    input.id = "name"
    input.name = "name"
    input.required = "true"
    let array = ogArray
    // submit button
    submit.textContent = "submit"
    form.appendChild(submit)
    submit.type = "submit"
    submit.addEventListener("click",function (e) {
        e.preventDefault()
        console.log(input.value);    
        for (let i = 0; i < array.length; i++) {
            if (array[i].name === inputName) {
                array[i].name = `${input.value}`
            }
            DeleteThings()
        }
        main.innerHTML = ""; // creates blank state

        //updates data in the array and displays it
        for (let i = 0; i < array.length; i++) {
            const name = array[i].name;
    const lname = array[i].lname;
    const project = array[i].projectName
    modifybutton(name,array)//add comment here
    
    const div = document.createElement("div");
    div.classList.add("blocks");
    div.textContent = `name: ${name}, lname of ${name} is: ${lname} and the projec is: ${project}` ;
    main.appendChild(div);

    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = `delete: ${name}`;
    button.value = name;
    button.id = name;
    main.appendChild(button);
            DeleteThings()
          }
    console.log(array);
    })
    }