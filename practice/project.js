import { showProjectModules } from "./arrrayobj.js";

let project = []


const getProjects = (pName) => {
    project.push(pName);
    console.log(project);
  }


  getProjects("main")
  getProjects("siblings")






export  const addProjectToDOM = () => {
    let projects = document.querySelector(".projects");
    projects.innerHTML = "";//providing preprovided data
  
    
      //displaying avaialable data
    for (let i = 0; i < project.length; i++) {
      const name = project[i];
      
      const div = document.createElement("div");
      div.classList.add("project-details");
      div.textContent = `name: ${name}`;
      projects.appendChild(div);
  
      const button = document.createElement("button");
      button.classList.add("button");
      button.innerText = `delete: ${name}`;
      button.value = name;
      button.id = "name";
      projects.appendChild(button);

        //button for showing todo with projectnames lister
        
    
        const showBtn = document.createElement("button");
        showBtn.innerText = `show items of: ${name}`;
        showBtn.value = name;
        showBtn.id = "project-details";
        projects.appendChild(showBtn);


        // Add an event listener to each "project-details" button
        showBtn.addEventListener("click", function (e) {
        e.preventDefault();
        console.log(showBtn.value); // Log the value of the clicked "project-details" button
        // Perform any other actions related to the "project-details" button here
        
            showProjectModules(showBtn.value)//providing data avout array and showbtn value
    
            
      })


      delteProjects()
    }
    
    
  };






 const delteProjects =()=>{
    
      const delButtons = document.querySelectorAll(".button");
    delButtons.forEach(function (delButton)/*to select every button with .button id*/ {
      delButton.addEventListener("click", function (e) {
        e.preventDefault();
        removeName(`${delButton.value}`);
        console.log(project);
        addProjectToDOM(); // Call the function recursively to update the DOM
        
      });
    });



    const removeName = (delName) => {
      const lowName = delName.toLowerCase();
    
      for (let i = 0; i < project.length; i++) {
        if (project[i].toLowerCase() === lowName) {
          project.splice(i, 1);              
          break;
        }
      }
    
    };
  }

  
  addProjectToDOM(); // Call the function initially to populate the DOM
  let modiTxtBtn = document.querySelector(".modi-txt-btn")
  modiTxtBtn.addEventListener("click",function (e) {
      e.preventDefault()
      addProjectToDOM()
  })


  // create a selecting option
