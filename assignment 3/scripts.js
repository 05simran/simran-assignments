function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var letters = /^[a-zA-Z. ]$ /;
  var url =document.getElementById("url");
  var urlw = /^[-a-zA-Z0-9@:%_\+.~#?&//=]$ /;
  error_message.style.padding = "10px";
  
  var text;
  if(!name.value.match(letters)){
    text = "Please Enter valid character";
    error_message.innerHTML = text;
    return true;
  }
  if(subject.length < 10){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(!url.value.match(urlw)){
    text = "Please Enter valid url";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return false;
}
function a(event){
  var char = event.which;
  if(char > 31 && char != 32 && (char<65 || char>90) && (char <97 || char >122)) {
    return false;
  }
}