// get user from local variable
var user = "pratik";

function loadData(){
  // alert("welcome to your profile..")
  // api url to fetch data of a user
  let url = "https://jsonplaceholder.typicode.com/users/1";
  fetchData(url).then(data=>{
    console.log("hello");
    console.log(data.name);  
    document.getElementById("uname").value ="akash";
    document.getElementById("uemail").value = data.name;
    document.getElementById("unumber").value = data.name;
    document.getElementById("ublood").value = data.name;
    document.getElementById("udob").value = data.name;
    document.getElementById("uheight").value = data.name;
    document.getElementById("uweight").value = data.name;
  });
  
}

// document.getElementById("add-btn").addEventListener("click",funAdd);

function funAdd(){
  console.log("hello");
  alert("new dependent will be added!!!");
  var form=`
  <form class="container-form">
  <table class="register-table">
    <tbody>
      <tr>
        <td>Relationship</td>
        <td><select class="relation" id="relation">
            <option value="mother">Mother</option>
            <option value="father">Father</option>
            <option value="sister">Sister</option>
            <option value="brother">Brother</option>
            <option value="spouse">Spouse</option>
            <option value="mother-in-law">Mother-in-law</option>
            <option value="father-in-law">Father-in-law</option>
        </select></td>
      </tr>
      <tr>
        <td><label class=required><b>Name</b></label></td>
        <td><input type="text" placeholder="Enter name" id="name"
          ></td>
      </tr>
      <tr>
        <td><label class=required><b>email</b></label></td>
        <td><input type="text" placeholder="Enter Enail" id="email"
          ></td>
      </tr>
      <tr>
        <td><label><b>Contact Number</b></label></td>
        <td><input type="tel" placeholder="Enter Contact Number"
          id="number" pattern="[1-9]{1}[0-9]{9}"></td>
      </tr>

      <tr>
        <td><label><b>Date of Birth</b></label></td>
        <td><input type="date" id="dob"></td>
      </tr>
      <tr>
        <td><label><b>weight</b></label></td>
        <td><input type="text" id="weight"></td>
      </tr>
      <tr>
        <td><label><b>Height</b></label></td>
        <td><input type="text" id="height"></td>
      </tr>
    </tbody>
  </table>
  <br> <br>
  <div class="buttons">
    <button type="submit" id="submit-btn" class="registerbtn" onclick="funRegister()">Register</button>
    <button type="button" id="cancel-btn" class="cancelbtn" onclick="funCancel()">Cancel</button>
  </div>
</form>
  `;
  document.getElementById("dep-area").innerHTML = form;
}

function funRegister(){
  var content =`
  <div class='btns'>
  <div><button class="dep-btn add-dependent" id="add-btn" onclick="funAdd()">Add Dependent</button> </div>
        
  <div><button class="dep-btn view-dependent" id="view-btn" onclick="funView()">View Dependent</button></div>

      </div>
  `;
    var relation = document.getElementById("relation").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var dob = document.getElementById("dob").value;
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

  // post method here
  console.log(relation,name,email,number,dob,weight,height);
  document.getElementById("dep-area").innerHTML = content;
  // document.getElementById("dep-area").innerHTML = "Hello ";
}

function funCancel(){
  var message = confirm("Are you sure you want to cancel");
  if(message == true){
    var content =`
  <div class='btns'>
  <div><button class="dep-btn add-dependent" id="add-btn" onclick="funAdd()">Add Dependent</button> </div>
        
  <div><button class="dep-btn view-dependent" id="view-btn" onclick="funView()">View Dependent</button></div>

      </div>
  `;
    document.getElementById("dep-area").innerHTML = content;
  }
  else{
    return false;
  }
}

// document.getElementById("view-btn").addEventListener("click",funView);

function funView(){

  alert("Here is your data");
  fetchData(url).then(data => render(data));

}
function render(data){
  let content = `
  <div><button class="dep-btn add-dependent" id="add-btn" onclick="funAdd()">Add Dependent</button> </div>
     <table>
       <thead>
         <tr >
         <td><h4>Id<h4></td>
         <td><h4>Name </h4></td>
         <td><h4>Email </h4></td>
         </tr>
       </thead>

       <tbody>
         ${data.map((user) => {
           return `
             <tr>
               <td>${user.id}</td>
               <td>${user.name}</td>
               <td>${user.email}</td>
             </tr>
           `
         }).join("")}
       </tbody>
     </table>
   `;
   document.getElementById("dep-area").innerHTML = content;
}


let url = "https://jsonplaceholder.typicode.com/users";
async function fetchData(url){
  const response = await fetch(url);
  const json = await response.json();
  return json;
}


