function fruits(name:string):void
{
  console.log(name)
}

fruits("Dragon Fruit")

//functionname--->fruits
//parameter---->name--->String(datatype)
//printing data of "string format"

function fruitss(name:(name:string)=>void):void //name:string)=>void---->Anonymous function
{
  name("Apple")
}

fruitss(fruits)

//function name----->fruitss
//parameter--->name---->function()