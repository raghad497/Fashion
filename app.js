var name = prompt("Welcome Queen to our online Shopping Journy , What's your name?")
alert("Have fun Shopping "+ name)
var x = prompt("tell us what are u intrested in from these(Dresses, Winter Fasion, Accessories)?")

while (x != "dresses" && x != "winter fashion" && x != "accessories") {

  x = prompt("you entered wrong movie please try gain ")
}

if(x == "dresses"){var numOfPic = prompt (" How many dresses do you want to see ?")
  }
  for (var y = 1; y <= numOfPic; y++){document.write("<div>"+ "<h3>" + "dresses"+"</h3>"+"<img src=' https://cdn.shopify.com/s/files/1/0109/5516/1658/products/9_0623386b-dbd5-4ad5-943c-3c003cd9ca0b_1000x1000.jpg?v=1564283932'>"+"</div>") } 

if(x == "winter fashion"){
  document.write("<p>"+ "amaizing , get ready to be warm and stylish at the same time" + "</p>")} 

if(x == "accessories"){
  document.write("<p>"+ "we have the greatest collection let's check it out" + "</p>")} 

  



  
 
  
