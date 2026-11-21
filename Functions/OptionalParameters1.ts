function emp(empname:string,empid:number,empage?:number)
{
    console.log("The empployee name is :"+empname)
    console.log("The employee id is :"+empid)

    if(empage==undefined)
    {
        console.log("The Employee is not working in company")
    }
    else
    {
        console.log("The Employee is working in company")
    }
}

//emp("Ravi",265,40)
emp("Raghu",266)