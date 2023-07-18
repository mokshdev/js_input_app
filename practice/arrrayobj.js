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



for (let i = 0; i < array.length; i++) {
    const name = array[i].name;
    const age = array[i].age
    console.log(array[i].name);
    let main = document.querySelector(".main")
    const div = document.createElement("div")
    div.classList.add('blocks')
    main.appendChild(div)
    div.textContent =  `name: ${array[i].name}, age of ${name} is: ${age}`
    
    
    
}

console.log(array);