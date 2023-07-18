let array = []

const getElements = (name,age)=>{
    console.log({name,age});
    array.push({name,age})
    console.log(array);
    return{
        name,age
    }
}

getElements("moksh",12)
console.log(array[0].name);
if (array[0].age == 12) {
    array[0].age = 18
    console.log(array);
}