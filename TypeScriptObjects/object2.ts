interface staffdata {

    sname: string
    sid:number
    sage:number
    ssalary:number
    sgender:string
    sdesignation:string
    isworking:boolean
    saddress:{

        shno:number
        sstreet:string
        sstate:string
        scity:string
        sdistrict:string


    }

}

let sinfo:staffdata=
{
    sname:"Rajesh",
    sid:799,
    sage:32,
    ssalary:20000,
    sgender:"male",
    sdesignation:"Maths teacher",
    isworking:true,
    saddress:{
            
        shno:3-234,
        sstreet:"Road no 5",
        sstate:"Ap",
        scity:"Vijayawada",
        sdistrict:"Krishna"
    }
}

console.log(sinfo.sage)