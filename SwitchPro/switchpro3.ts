let d:string="april"
switch("april")
{
   case "jan":console.log("January")
              //break;
   case "feb":console.log("Febreuary")
              //break;       
   case "mar":console.log("March")
              //break;
   case "april":console.log("April")
                //break; // fall through condition
   case "may":console.log("May")
              //break;
   case "jun":console.log("june")
              //break;       
   case "jul":console.log("July")
              break;
   case "aug":console.log("August")
              break;
   case "sep":console.log("Sepetember")
              break;
   case "oct":console.log("October")
              break;       
   case "nov":console.log("November")
              break;
   case "dec":console.log("December")
              break;
   default : console.log("Invalid Month")
             break;
}