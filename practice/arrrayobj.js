let array = []

const getElements = (name,age)=>{
    // console.log({name,age});
    array.push({name,age})
    // console.log(array);
    return{
        name,age
    }
}

getElements("moksh",12)
getElements("hitika",15)
getElements("kartik",210)
// console.log(array[0].name);
// if (array[0].age == 12) {
//     array[0].age = 18
//     console.log(array);
// }

let button = document.createElement("button")


for (let i = 0; i < array.length; i++) {
    const name = array[i].name;
    const age = array[i].age
    // console.log(array[i].name);
    let main = document.querySelector(".main")
    const div = document.createElement("div")
    const button = document.createElement("button")
    button.classList.add('button')
    div.classList.add('blocks')
    button.innerText = `${array[i].name}`
    button.value = `${array[i].name}`
    button.id = `${array[i].name}`
    main.appendChild(div)
    main.appendChild(button)
    div.textContent =  `name: ${array[i].name}, age of ${name} is: ${age}`
    
    
    
}

const delButtons = document.querySelectorAll(".button");




const removeName = (delName) => {
    let main = document.querySelector(".main")
    while (main.firstChild) {
        main.removeChild(main.firstChild);
      }

    const lowName = delName.toLowerCase();
  
    for (let i = 0; i < array.length; i++) {
      if (array[i].name.toLowerCase() === lowName) {
        array.splice(i, 1);
        break; // Exit the loop after removing the object
      }
    }
    for (let i = 0; i < array.length; i++) {
        const name = array[i].name;
        const age = array[i].age
        // console.log(array[i].name);
        let main = document.querySelector(".main")
        const div = document.createElement("div")
        const button = document.createElement("button")
        button.classList.add('button')
        div.classList.add('blocks')
        button.innerText = `${array[i].name}`
        button.value = `${array[i].name}`
        button.id = `${array[i].name}`
        main.appendChild(div)
        main.appendChild(button)
        div.textContent =  `name: ${array[i].name}, age of ${name} is: ${age}`
        
        
        
    }

  }
 
//   removeName("moksh");
  
delButtons.forEach(function(delButton) {
    delButton.addEventListener('click', function(e) {
      e.preventDefault();
      removeName(`${delButton.value}`)
      console.log(array);
      /*const lowName = `${delButton.value}`;
      console.log(`low name is${lowName}`);
      for (let i = 0; i < array.length; i++) {
        if (array[i].name.toLowerCase() === lowName) {
          array.splice(i, 1);
          break; // Exit the loop after removing the object
        }
      }*/
  
    });
  });


// console.log(array);

/*so i will use diff div in side the alreeadey present div, or i can add a value to the div and then i will use that to get the valye and then i will use that value to updat ethe array , in order the modify i will do the same instead of removing i will updat the value in the array, also i wil ladd an elemant name project in the array, defauly will be all and wwhen added customly it will have it modified, and then when we click on the name of project, the function will search thaqt array in the array of todo and display the sorted data in the column, same with priority and date also. 
once i am done with all of this basic knowledge i will save the data locally and fetch it from there. thats it and it will work as intended */