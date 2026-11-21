interface employee {
      name1:string
      age1:number
      gender1:string
}

interface employee1 {
      name2:string
      age2:number
      gender2:string
}


let emp1:employee={
    name1:"Ramesh",
    age1:35,
    gender1:"Male"
}

let emp2: employee1=
{
    name2:"Rajani",
    age2:35,
    gender2:"Female"
}

let emp3={...emp1, ...emp2}

console.log(emp3)