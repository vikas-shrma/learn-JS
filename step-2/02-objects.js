
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


console.table([   object2,object2.id,object2["email"],typeof idSymbol]);