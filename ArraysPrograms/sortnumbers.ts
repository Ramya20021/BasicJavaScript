let mynum:number[]=[99,67,89,90,2,5,26]

let newnum:number[]=mynum.sort()
console.log(newnum)

// let newsort:number[]=mynum.sort((x,y)=>x-y)
// console.log(newsort)

let newsortasc:number[]=mynum.sort((r,u)=>r-u)

console.log(newsortasc)

let newsortdesc:number[]=mynum.sort((r,u)=>u-r)
console.log(newsortdesc)