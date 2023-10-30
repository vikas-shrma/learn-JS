
// there are two ways to create object in JS

// below one is using create method of object, it will be singletone instance of this variable
//var object1 = Object.create()

let idSymbol = Symbol("ID")

// below one is using literels
var object2 = {
id:"1",
[idSymbol]:"my Id value",
"name":"cikas sharma",
email:"vikas@gmail.com"
}


//console.table([   object2,object2.id,object2["email"],typeof idSymbol]);


// destructuring of object in JS
// means you can direclty get value from object so every time dont use

const dataObject = {name:"Vikas Sharma",age :30,email:"vikas.sharma@statusneo.com"}



function data() {
    var {name,email,age} = dataObject

var alpha  = "yahoo"

   // console.log(`The Destructuring objects is Name-> ${name} Age-> ${age} Email-> ${email}`)
}

console.log(alpha)
// console.log(`The Destructuring objects is 22 Name-> ${name} Age-> ${age} Email-> ${email}`)


