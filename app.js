var name = prompt("Welcome Queen to our online Shopping Journy , What's your name?")
alert("Have fun Shopping "+ name)
var x = prompt("tell us what are u intrested in from these(dresses, winter fasion, accessories)?")

while (x != "dresses" && x != "winter fashion" && x != "accessories") {

  x = prompt(" Sorry ! you entered wrong input please try again ! ")
}

if(x == "dresses"){var numofdress = prompt (" How many dresses do you want to see ?")
  }
  for (var y = 1; y <= numofdress; y++){document.write("<div>"+ "<h3>" + "dresses"+"</h3>"+"<img src=' https://i.pinimg.com/originals/df/e0/37/dfe037e0c609fd10421157a61b978619.jpg'>"+"</div>") } 

if(x == "winter fashion"){var numofcoats = prompt (" How many coats do you want to see ?")
  }
  for (var y = 1; y <= numofcoats; y++){document.write("<div>"+ "<h3>" + "dresses"+"</h3>"+"<img src=' https://www.nydailynews.com/resizer/48P3Ss8IDd964K5GPhQ4Ti5UBUY=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/NJYYCMNHPZFOZPMHF2VLKNKGEQ.jpg'>"+"</div>") }

  if(x == "accessories"){var numofitems = prompt (" How many item do you want to see ?")
  }
  for (var y = 1; y <= numofitems; y++){document.write("<div>"+ "<h3>" + "dresses"+"</h3>"+"<img src=' https://i.pinimg.com/originals/04/ce/2e/04ce2ed7c7fb8d7454fcbace300895ea.jpg'>"+"</div>") } 




  
 
  
