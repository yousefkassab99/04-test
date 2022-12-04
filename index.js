
const myDiv = document.getElementById("area");

document.getElementById("butOne").onclick = function() {myFunction1()};
document.getElementById("butTwo").onclick = function() {myFunction2()};
document.getElementById("butThre").onclick = function() {myFunction3()};
document.getElementById("butFour").onclick = function() {myFunction4()};


function myFunction1() {
    myDiv.textContent = "one !!!!!!"
  }

function myFunction2() {
    myDiv.textContent = "two ??????????"
  }

function myFunction3() {
    myDiv.textContent = "three ....... "
  }

function myFunction4() {
    myDiv.textContent = "four >>>>>>>>>> "
  }