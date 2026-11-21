let d:string="My name is : Ramya Reddi, My gamil account is:ramyareddi504@gmail.com"

let removealpha:string=d.replaceAll(/[A-Za-z]/g, "^")  //^^ ^^^^ ^^ : ^^^^^ ^^^^^, ^^ ^^^^^ ^^^^^^^ ^^:^^^^^^^^^^504@^^^^^.^^^

console.log(removealpha)

let removenumber:string=d.replaceAll(/[0-9]/g," ") //My name is : Ramya Reddi, My gamil account is:ramyareddi   @gmail.com

console.log(removenumber)

let onlyspecial:string=d.replaceAll(/[0-9A-ZA-Za-z]/g," ")

console.log(onlyspecial) //          :            ,                    :             @     .

let remspecial:string=d.replaceAll(/[^0-9A-ZA-Za-z]/g," ")

console.log(remspecial) //My name is   Ramya Reddi  My gamil account is ramyareddi504 gmail com