//firebase connection
var firebaseConfig = {
  apiKey: "AIzaSyCxYVChREHufmbsKJYOcg7vCuoWWau0tHk",
  authDomain: "newagent-xrsgcn.firebaseapp.com",
  databaseURL: "https://newagent-xrsgcn-default-rtdb.firebaseio.com",
  projectId: "newagent-xrsgcn",
  storageBucket: "newagent-xrsgcn.appspot.com",
  messagingSenderId: "23344131382",
  appId: "1:23344131382:web:8cedd37d71660f3ed75797",
  measurementId: "G-GQJSNRN0D5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  //feedback code
  function send() {
    uname = document.getElementById("uname").value;
    ufeedback = document.getElementById("ufeedback").value;
    emailid = document.getElementById("emailid").value;
    mnumber = document.getElementById("mnumber").value;
    firebase.database().ref("/").child(uname).update({
      feedback : ufeedback,
      email : emailid,
      mobile : mnumber
    });

    document.getElementById("uname").value = "";
    document.getElementById("feedback").value = "";
    document.getElementById("emailid").value = "";
    document.getElementById("mnumber").value = "";

    window.alert("Feedback submitted sucessfully");
    /*firebase.database().ref(room_name).push({
      name:uname,
      message:feedback,
     });
     */
  }



  //COde for starts


  /*Downloaded from https://www.codeseek.co/ovdojoey/css-gift-opening-pgozGX  for suprise box*/

var to = 'Suprise!';
var gift_url = 'http://www.amazon.com/gp/product/B00X4WHP5E/ref=ods_xs_ae_shurl?tag=googhydr-20&hvadid=74652194316&hvpos=1t1&hvexid=&hvnetw=g&hvrand=7560558939874219351&hvpone=&hvptwo=&hvqmt=b&hvdev=c&ref=pd_sl_2vatdqwe3p_b';
var gift_image_url = 'om.jpeg';
var gift_image_array = ['om.jpeg',"pooja.jpg"]



var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_array[0];
    _giftImg.height = "10%"

    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
  }, false);
  
  
  
  nametag.innerText = to;
}

init();