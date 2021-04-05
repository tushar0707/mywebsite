/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function login(){
//alert("Login button Clicked");
name1 = document.getElementById("name").value;
name2 = document.getElementById("email").value;
name3 = document.getElementById("uname").value;
console.log(name1,name2,name3);
  }