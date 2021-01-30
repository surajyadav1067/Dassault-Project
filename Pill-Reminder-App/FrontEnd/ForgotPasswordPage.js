document.getElementById("forgot-pwd-save-btn").addEventListener("click", forgotPwd);
document.getElementById("forgot-pwd-cancel-btn").addEventListener("click", loginPage);

function forgotPwd() {
    let contact = document.getElementById("forgot-contact").value;
    let email = document.getElementById("forgot-email").value;
    let dob = document.getElementById("forgot-dob").value;
    let newPwd = document.getElementById("forgot-new-pwd").value;
    let cnfNewPwd = document.getElementById("forgot-cnf-new-pwd").value;

    let v01 = validateData(contact,email,dob);
    let v02 = validatePwd(newPwd,cnfNewPwd);

    if(v01 === false) {
        alert("Entered credentials are incorrect. Please re-enter.");
    }

    else if(v02 === false) {
        alert("Entered new passwords do not match.");
    }

    else {
        document.getElementById("forgot-pwd-div").innerHTML = `<p>  Password successfully reset </p>`;
    }
}

function validateData(contact,email,dob) {
    return (contact==="9876543210"&&email==="me@me.co"&&dob==="2021-01-01")
}

function validatePwd(pwd01,pwd02) {
    return (pwd01===pwd02)
}

function loginPage() {
    window.location.href = 'LoginPage.html';
}