let age:number=18
let citizen:string="indian"

if(age >=18 && citizen=="indian")

    {
        console.log("Person is elegible for vote")
    }

else if( age < 18 && citizen=="indian")
{
    console.log("Person is indian but person age is less than 18 : person is not eligible for vote")

}

else if(age>18 && citizen=="american")

    {
        console.log("Person is eligible for vote but person is not indian")
    }
else
{
    console.log("Person is not eligible for vote because person is not indian and age is less than 18")
}


