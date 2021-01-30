document.getElementById("login-btn").addEventListener("click", verifyData);

function verifyData() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    console.log(email, password);

    let v01 = validateData(email,password);

    if(v01 === false) {
        alert("Entered credential are incorrect. Please re-enter.");
    }

    else {
        document.getElementById("login-div").innerHTML = `<p>  Hello ${email}!! </p>`;
    }
}

function validateData(email, password) {
    return (email==="me@me.co" && password==="1234");
}
