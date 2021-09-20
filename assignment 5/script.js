

var btn = document.getElementById("register");
btn.addEventListener("click", function(){
    document.getElementById("register-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}, false);
   
  
var btn = document.getElzementById("login");
btn.addEventListener("click", function(){
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
}, false);

   

var login = (function(){
       
    var uname = document.getElementById('uname').value;
    var pass = document.getElementById('pass').value;

    function validate(){
        if ( uname.value == "admin" && pass.value == "admin"){
            alert ("login Successfull");
            window.location.reload();
           
        }
        else {
            alert ("Please Enter Correct Info");
            window.location.reload();
        }
        return false;
    
     }
return {
    validate : validate()
}
})();



var register = (function(){
    
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var pass1 = document.getElementById('pass1').value;
    var pass2 = document.getElementById('pass2').value;

    function validate(){
        if (  pass1 != pass2){
            alert ("both the passwords doesnt matches");  
            return false;   
        }
       
     
        return false;
    
    }
    return {
        validate : validate()
     
    }
})();
