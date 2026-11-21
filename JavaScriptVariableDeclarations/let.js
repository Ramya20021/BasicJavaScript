let myname="viswa"  // we are assigning viswa to myname
console.log(myname)

myname="Ashok"      // we are reassigning Ashok to myname
console.log(myname)

//let myname="Ramya"  //SyntaxError: Identifier 'myname' has already been declared

{
    console.log(myname) // we are accessing outside data into inside block

    let mycolor="White"  // we are accessing inside data into inside block
    console.log(mycolor)
}

console.log(mycolor)   // ReferenceError: mycolor is not defined