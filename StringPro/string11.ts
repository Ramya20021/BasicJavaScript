let b:string="Morning at 8AM class started and at 9am class ended"

let c:string[]=b.split(" ") //string converts to array

for(let G of c)
{
    console.log(G) 
}

//Morning
// at
// 8AM
// class
// started
// and
// at
// 9am
// class
// ended