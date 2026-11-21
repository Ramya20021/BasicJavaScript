const mycompany="Infosys" // we are assigning Infosys to mycompany
console.log(mycompany)

//mycompany="Wipro"
//console.log(mycompany) //TypeError: Assignment to constant variable.

//const mycompany="TCS"  //SyntaxError: Identifier 'mycompany' has already been declared

{
    console.log(mycompany) // we are accessing outside data into inside block

    const mycolor="Red" // we are accessing inside data into inside block
    console.log(mycolor)
}

console.log(mycolor) // ReferenceError: mycolor is not defined