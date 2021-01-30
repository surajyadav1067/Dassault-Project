document.getElementById("registration-submit-btn").addEventListener("click", acceptData);
document.getElementById("registration-cancel-btn").addEventListener("click", goToLogin);

function acceptData() {
    let name = document.getElementById("registration-name").value;
    let email = document.getElementById("registration-email").value;
    let number = document.getElementById("registration-contact").value;
    let dob = document.getElementById("registration-dob").value;
    let password = document.getElementById("registration-pwd").value;
    let confirmPassword = document.getElementById("registration-cnf-pwd").value;
    console.log(name, email, number, dob, password, confirmPassword);

    let v01 = validateData(name, email, password, confirmPassword);
    let v02 = validatePwd(password, confirmPassword);
    if (v01 === false) {
        alert("Some fields are empty..");
    }

    else if (v02 === false) {
        alert("passwords do not match!!");
    }
    // alert(`New User ${name} created!!`)
    else document.getElementById("registration-div").innerHTML = `<p>  Hello ${name}!! </p>`;
}

function validateData(name, email, password, confirmPassword) {
    return !!(name && email && password && confirmPassword);
}

function validatePwd(password, confirmPassword) {
    return password === confirmPassword;
}

function goToLogin() {
    window.location.href = 'LoginPage.html';
}
