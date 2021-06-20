var name = prompt("Welcome Queen to our online Shopping Journy , What's your name?")
alert("Have fun Shopping " + name)

function favourclothes() {
  var x = prompt("tell us what are u intrested in from these(dresses, winter fasion, accessories)?")

  while (x != "dresses" && x != "winter fashion" && x != "accessories") {

    x = prompt(" Sorry ! you entered wrong input please try again ! ")
  }

<<<<<<< HEAD
  if (x == "dresses") {
    var numofdress = prompt(" How many dresses do you want to see ?")
=======
if(x == "dresses"){var numofdress = prompt (" How many dresses do you want to see at the bottom of our site ?")
>>>>>>> a6a56ea7e769f71a3be5d0fb79d3bb8a7d35ab3b
  }
  for (var y = 1; y <= numofdress; y++) { document.write("<div>" + "<h3>" + "dresses" + "</h3>" + "<img src=' https://i.pinimg.com/originals/df/e0/37/dfe037e0c609fd10421157a61b978619.jpg'>" + "</div>") }

<<<<<<< HEAD
  if (x == "winter fashion") {
    var numofcoats = prompt(" How many coats do you want to see ?")
=======
if(x == "winter fashion"){var numofcoats = prompt (" How many coats do you want to see at the bottom of our site ?")
>>>>>>> a6a56ea7e769f71a3be5d0fb79d3bb8a7d35ab3b
  }
  for (var y = 1; y <= numofcoats; y++) { document.write("<div>" + "<h3>" + "dresses" + "</h3>" + "<img src=' https://www.nydailynews.com/resizer/48P3Ss8IDd964K5GPhQ4Ti5UBUY=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/NJYYCMNHPZFOZPMHF2VLKNKGEQ.jpg'>" + "</div>") }

<<<<<<< HEAD
  if (x == "accessories") {
    var numofitems = prompt(" How many item do you want to see ?")
=======
  if(x == "accessories"){var numofitems = prompt (" How many item do you want to see at the bottom of our site ?")
>>>>>>> a6a56ea7e769f71a3be5d0fb79d3bb8a7d35ab3b
  }
  for (var y = 1; y <= numofitems; y++) { document.write("<div>" + "<h3>" + "dresses" + "</h3>" + "<img src=' https://i.pinimg.com/originals/04/ce/2e/04ce2ed7c7fb8d7454fcbace300895ea.jpg'>" + "</div>") }


}
favourclothes();


function rating(num) {

  for (var i = 0; i < num; i++) {

    document.write("<img  src='https://pngimg.com/uploads/red_star/red_star_PNG22.png' >")
  }

}

var starsNum = prompt('How many beautiful red star do you want to rate our website ?')

rating(starsNum);








