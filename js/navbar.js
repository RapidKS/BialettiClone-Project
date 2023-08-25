

var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}
var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        document.getElementById("login-form").style.display = "none";
    }
}  

/*document.querySelector(".submit-btn").addEventListener("click", display);


function display(){
   const close = document.getElementById("login-form");
  
   if(document.getElementById("login-pass").value!=""&&document.getElementById("login-pass").value!=""){
close.style.display = "none";
   }
}*/
document.getElementById("register").addEventListener("submit" , getinfo);
var dataArr = JSON.parse(localStorage.getItem("account-data")) || [];
function getinfo(){
    event.preventDefault();

  var email = document.querySelector("#regisemail").value;
  var password = document.querySelector("#resipass").value;
  var repassword = document.querySelector("#resirepass").value;
  var firstname = document.querySelector("#firstname").value;
  var lastname = document.querySelector("#lastname").value;

  var dataObj = { 
    email: email,
    password: password,
    repassword:repassword,
    firstname:firstname,
    lastname:lastname
};
if (dataArr.some(function(ele) { return ele.email === email })) {
    var emailexist =  document.querySelector("#email-exists");
    emailexist.textContent = "The email id provided is already exist";
    emailexist.style.color = "red";
    emailexist.style.display = "inline";
    return;
  } else {
    document.querySelector("#email-exists").style.display = "none";
  }

  dataArr.push(dataObj);
  document.querySelector("#regisemail").value ="";
  document.querySelector("#resipass").value = "";
  document.querySelector("#resirepass").value = "";
  document.querySelector("#firstname").value = "";
  document.querySelector("#lastname").value = "";

  localStorage.setItem("account-data", JSON.stringify(dataArr));
    var emailexist =  document.querySelector("#email-exists");
    emailexist.textContent = "Account created successfully!";
    emailexist.style.color = "green";
    emailexist.style.display = "inline";
  
}

var dataArr = JSON.parse(localStorage.getItem("account-data")) || [];
document.querySelector("#login").addEventListener("submit", signInFun);

function signInFun(){
event.preventDefault();

var loginemail = document.getElementById("login-email").value;
var loginpass = document.getElementById("login-pass").value;
var found = false;

dataArr.map(function(ele){ 
    if (ele.email === loginemail && ele.password === loginpass) {
      found = true;
      return false; 
    }
  });
  
  if(found){
    const close = document.getElementById("login-form");
    close.style.display = "none";
  }
  else{
    document.querySelector("#password-error").style.display = "inline";
  }


}

const magni = document.getElementById("magniglass");


magni.addEventListener("click", displaysearch);

function displaysearch(){
    const searchbar = document.getElementById("search")
    if(searchbar.style.display ===""){
        searchbar.style.display = "block";
        
    }
    else if(searchbar.style.display ==="block"){
        searchbar.style.display = "none";
       
    }
    else if(searchbar.style.display ==="none"){
        searchbar.style.display = "block";
        
    }
    console.log(3);
}


document.getElementById("open").addEventListener("click", w3_open);
document.getElementById("closebtn").addEventListener("click", w3_close);

function w3_open() {
    document.getElementById("mySidebar").style.display = "flex";
    console.log("11")
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }


