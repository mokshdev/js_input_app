let array = [];


const getElements = (name, age) => {
  array.push({ name, age });
};

getElements("moksh", 12);
getElements("hitika", 15);
getElements("kartik", 210);

const modifybutton = (inputName) =>{
const main = document.querySelector(".main");
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
    }
    main.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const name = array[i].name;
        const age = array[i].age;
    
        const div = document.createElement("div");
        div.classList.add("blocks");
        div.textContent = `name: ${name}, age of ${name} is: ${age}`;
        main.appendChild(div);
    
        const button = document.createElement("button");
        button.classList.add("button");
        button.innerText = name;
        button.value = name;
        button.id = name;
        main.appendChild(button);
      }
console.log(array);
})
}


const addButtonToDOM = () => {
  let main = document.querySelector(".main");
  main.innerHTML = "";

    

  for (let i = 0; i < array.length; i++) {
    const name = array[i].name;
    const age = array[i].age;
    modifybutton(name)
    const div = document.createElement("div");
    div.classList.add("blocks");
    div.textContent = `name: ${name}, age of ${name} is: ${age}`;
    main.appendChild(div);

    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = name;
    button.value = name;
    button.id = name;
    main.appendChild(button);
  }

  const delButtons = document.querySelectorAll(".button");
  delButtons.forEach(function (delButton) {
    delButton.addEventListener("click", function (e) {
      e.preventDefault();
      removeName(`${delButton.value}`);
      console.log(array);
      addButtonToDOM(); // Call the function recursively to update the DOM
      
    });
  });
};

const removeName = (delName) => {
  const lowName = delName.toLowerCase();

  for (let i = 0; i < array.length; i++) {
    if (array[i].name.toLowerCase() === lowName) {
      array.splice(i, 1);
      break;
    }
  }
};

addButtonToDOM(); // Call the function initially to populate the DOM
let modiTxtBtn = document.querySelector(".modi-txt-btn")
modiTxtBtn.addEventListener("click",function (e) {
    e.preventDefault()
    addButtonToDOM()
})

// creating form
/*const main = document.querySelector(".main");
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

// submit button
submit.textContent = "submit"
form.appendChild(submit)
submit.type = "submit"



// event listener on submit of form
submit.addEventListener("click",function (e) {
    e.preventDefault()
    console.log(input.value);    
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === "moksh") {
            array[i].name = `${input.value}`
        }
    }
    
console.log(array);
})*/




// Add more elements to formDiv1 or perform other operations as needed

// console.log(array);

/*so i will use diff div in side the alreeadey present div, or i can add a value to the div and then i will use that to get the valye and then i will use that value to updat ethe array , in order the modify i will do the same instead of removing i will updat the value in the array, also i wil ladd an elemant name project in the array, defauly will be all and wwhen added customly it will have it modified, and then when we click on the name of project, the function will search thaqt array in the array of todo and display the sorted data in the column, same with priority and date also. 
once i am done with all of this basic knowledge i will save the data locally and fetch it from there. thats it and it will work as intended */