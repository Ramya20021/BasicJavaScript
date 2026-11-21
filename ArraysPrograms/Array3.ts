let laptops:string[]=["HP", "Samsung", "Dell","Lenovo","Asus","Redmine","MI"]

laptops.splice(3,2)

console.log("Removing 2 elements from index 3:",laptops)//"HP", "Samsung", "Dell",,"Redmine","MI"

laptops.splice(4)

console.log("Removing all the elements after index 4:",laptops)//'HP', 'Samsung', 'Dell', 'Redmine' 

laptops.splice(3,2, "thinkpad","Intel","Powershell")

console.log("Adding New elements on the array after removing elements:",laptops)