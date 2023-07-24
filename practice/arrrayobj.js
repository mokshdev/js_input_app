import { modifybutton } from "./modifybutton.js";
import { addProjectToDOM } from "./project.js";
//initialisation
//creating the array
let array = [];

//getting the list of array
const getElements = (name, age,projectNeo) => {
  array.push({ name, age ,projectNeo});
};

//adding data
getElements("moksh", 12,"main");
getElements("hitika", 15,"siblings");
getElements("kartik", 210,"siblings");




const addButtonToDOM = () => {
  let main = document.querySelector(".main");
  main.innerHTML = "";//providing preprovided data

  
    //displaying avaialable data
  for (let i = 0; i < array.length; i++) {
    const name = array[i].name;
    const age = array[i].age;
    const projectName = array[i].projectNeo
    modifybutton(name,array)//add comment here
    
    const div = document.createElement("div");
    div.classList.add("blocks");
    div.textContent = `name: ${name}, age of ${name} is: ${age} and the projec is: ${projectName}` ;
    main.appendChild(div);

    const button = document.createElement("button");
    button.classList.add("button");
    button.innerText = `delete: ${name}`;
    button.value = name;
    button.id = name;
    main.appendChild(button);
    DeleteThings()
  }

  
};
export const DeleteThings =()=>{
    const delButtons = document.querySelectorAll(".button");
  delButtons.forEach(function (delButton) {
    delButton.addEventListener("click", function (e) {
      e.preventDefault();
      removeName(`${delButton.value}`);
      console.log(array);
      addButtonToDOM(); // Call the function recursively to update the DOM
      
    });
  });
  const removeName = (delName) => {
    const lowName = delName.toLowerCase();
  
    for (let i = 0; i < array.length; i++) {
      if (array[i].name.toLowerCase() === lowName) {
        array.splice(i, 1);
        break;
      }
    }
  
  };
}
DeleteThings()

addButtonToDOM(); // Call the function initially to populate the DOM
let modiTxtBtn = document.querySelector(".modi-txt-btn")
modiTxtBtn.addEventListener("click",function (e) {
    e.preventDefault()
    addButtonToDOM()
})

addProjectToDOM()




// Add more elements to formDiv1 or perform other operations as needed

// console.log(array);

/*so i will use diff div in side the alreeadey present div, or i can add a value to the div and then i will use that to get the valye and then i will use that value to updat ethe array , in order the modify i will do the same instead of removing i will updat the value in the array, also i will add an elemant name project in the array, default will be all and wwhen added customly it will have it modified, and then when we click on the name of project, the function will search thaqt array in the array of todo and display the sorted data in the column, same with priority and date also. 
once i am done with all of this basic knowledge i will save the data locally and fetch it from there. thats it and it will work as intended */