
document.getElementById("submit-btn").addEventListener("click",fun);

function fun(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var dob = document.getElementById("dob").value;
  var password = document.getElementById("pass").value;
  var confirmPassword = document.getElementById("conpass").value;
  console.log(name, email, number, dob, password, confirmPassword);

  let v = validateField(name,email,password, confirmPassword)
  if(v==false){
    alert("Some fields are empty..")
    return;
  }

  let val = validate(password, confirmPassword);
  if(val == false){
    alert("passwords do not match!!");
    return;
  }
  else
    // alert(`New User ${name} created!!`)
    document.getElementById("main").innerHTML=
    `<p>  Hello ${name}!! </p>`;
    
  
}
function validateField(name,email,password, confirmPassword){
  if(name && email && password && confirmPassword)
    return true;
  else
    return false; 
}
function validate(password, confirmPassword){
  if(password===confirmPassword){
    return true;
  }
  else{
    return false;
  }
}
















