import { modifybutton } from "./modifyTodo.js";
import { addProjectToDOM } from "./projectCreate.js"

//initialisation
//creating the array
let array = [];


//adding data

let creatingElements =()=>{
    let form = document.getElementById("form")
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission (prevents page reload)
      
        // Retrieve data from input fields
        const name = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const projectName = document.getElementById("projectName").value
        // You can now use the retrieved data as needed
        array.push({ name, lname ,projectName});
        console.log(array);

        addButtonToDOM()
        // Do further processing, like sending data to the server or performing other actions
      });
}
creatingElements()



addProjectToDOM()


export let showProjectModules =(showButtonValue)=>{
    let showBtnValue = showButtonValue
    let main = document.querySelector(".blocks-neo");
    main.innerHTML = "";//providing preprovided data
          
            
              //displaying avaialable data
            for (let i = 0; i < array.length; i++) {
              const name = array[i].name;
              const lname = array[i].lname;
              const projectNeo = array[i].projectName;
              
              if (projectNeo === showBtnValue) {
                const div = document.createElement("div");
                div.classList.add("blocks");
                div.textContent = `name: ${name}, lname of ${name} is: ${lname} and the projec is: ${projectNeo}` ;
                main.appendChild(div);
            
                const button = document.createElement("button");
                button.classList.add("button");
                button.innerText = `delete: ${name}`;
                button.value = name;
                button.id = name;
                main.appendChild(button); 

                const showBtn = document.createElement("button");
                showBtn.innerText = `show items of: ${name}`;
                showBtn.value = name;
                showBtn.id = "project-details";
                projects.appendChild(showBtn);
                
              }
              
              

        
            
          };
}










const addButtonToDOM = () => {
  let main = document.querySelector(".blocks-neo");
  main.innerHTML = "";//providing preprovided data

  
    //displaying avaialable data
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

let modiTxtBtn = document.querySelector(".modi-txt-btn")
modiTxtBtn.addEventListener("click",function (e) {
    e.preventDefault()
    addButtonToDOM()
})





//Add more elements to formDiv1 or perform other operations as needed


/*so i will use diff div in side the alreeadey present div, or i can add a value to the div and then i will use that to get the valye and then i will use that value to updat ethe array , in order the modify i will do the same instead of removing i will updat the value in the array, also i will add an elemant name project in the array, default will be all and wwhen added customly it will have it modified, and then when we click on the name of project, the function will search thaqt array in the array of todo and display the sorted data in the column, same with priority and date also. 
once i am done with all of this basic knowledge i will save the data locally and fetch it from there. thats it and it will work as intended */