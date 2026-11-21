var mycar="Audi"; // we are assigning Audi (value) to mycar (variable)
console.log(mycar) //Printing the value

mycar="8769" // we are reassigning 8769 to mycar
console.log(mycar)

var mycar="Red and Blue" // we are redeclaring Red and Blue into mycar

console.log(mycar)

{
  console.log(mycar) // we are accessing outside data into inside block
  var mycolor="Blue" // we are accesing inside data into inside block
  console.log(mycolor)
}

console.log(mycolor) // we are accessing inside data into outside block