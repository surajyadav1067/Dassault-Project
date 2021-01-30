
//var url = "https://jsonplaceholder.typicode.com/users";
var url = "http://localhost:8080/showUser";
const table_ele = document.getElementById("medical-history");

async function fetchData(url){
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

function render(data){
  let table = `
    <h4>Your Medical history</h4>
     <table class="table table-condensed tab">
       <thead>
         <tr >
         <td><h4>UserId<h4></td>
         <td><h4>Name</h4></td>
         <td><h4>Email</h4></td>
         <td><h4>City</h4></td>
         </tr>
       </thead>

       <tbody>
         ${data.map((user) => {
           return `
             <tr>
               <td>${user.id}</td>
               <td>${user.name}</td>
               <td>${user.email}</td>
               <td>${user.password}</td>
               <td><button onclick="deletefun(this)"">delete</button></td>
             </tr>
           `
         }).join("")}
       </tbody>
     </table>
   `;
   console.log("hello above iner.")
   table_ele.innerHTML=table;
}

function fun(){
  fetchData(url).then(data => render(data));
}

document.getElementById("submit-btn").addEventListener("click",fun);

function deletefun(o){
  var p=o.parentNode.parentNode;
         p.parentNode.removeChild(p);
// Write a delete method here to remove the medical data from database
}
