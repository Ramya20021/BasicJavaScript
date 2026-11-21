function checkruns():void
{
    let t:number=0
    for(let i:number=63;i<=6578097435;i++)
    {
        t++;
    }
    console.log("The given for loop runs for:"+t)
}

setTimeout(():void => {  //setTimeOut---->Call back function

    checkruns()
})

let a:number=20
let b:number=30

console.log("The Product of A and B is : "+(a*b))