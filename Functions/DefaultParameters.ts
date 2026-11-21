function product(pname:string,pcost:number,pdiscount:string="50% discount")
{

    console.log("The product name is :"+pname)
    console.log("The product cost is: "+pcost)

    if(pcost>100)
    {
        console.log("The product is in "+pdiscount)
    }

    else
    {
        console.log("The product is not in "+pdiscount)
    }
}

product("stove",2000)

product("Lays",10)
