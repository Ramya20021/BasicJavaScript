interface staffdata {

    sname: string
    sid:number
    sage:number
    ssalary:number
    sgender:string
    sdesignation:string
    isworking:boolean
    smarried:string
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
    smarried:"Married",
    saddress:{
            
        shno:234,
        sstreet:"Road no 5",
        sstate:"Ap",
        scity:"Vijayawada",
        sdistrict:"Krishna"
    }
}

//sinfo.smarried="Married"

//sinfo.sid=800

console.log('saddress' in sinfo)

console.log(sinfo)