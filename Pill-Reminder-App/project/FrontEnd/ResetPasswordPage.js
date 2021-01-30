document.getElementById("reset-pwd-save-btn").addEventListener("click", resetPwd);
document.getElementById("reset-pwd-cancel-btn").addEventListener("click", loginPage);

function resetPwd() {
    let oldPwd = document.getElementById("current-pwd").value;
    let newPwd = document.getElementById("new-pwd").value;
    let cnfNewPwd = document.getElementById("cnf-new-pwd").value;
    //console.log(email, password);

    let v01 = validateOldPwd(oldPwd);
    let v02 = validateNewPwd(newPwd,cnfNewPwd);
    let v03 = validateDiffPwd(oldPwd,newPwd);

    if(v01 === false) {
        alert("Current password is incorrect.");
    }

    else if(v02 === false) {
        alert("Entered new passwords do not match.");
    }

    else if(v03 === false) {
        alert("New password cannot be same as old password.")
    }

    else {
        document.getElementById("reset-pwd-div").innerHTML = `<p>  Password successfully reset </p>`;
    }
}

function validateOldPwd(oldPwd) {
    return (oldPwd === "1234");
}

function validateNewPwd(newPwd,cnfNewPwd) {
    return (newPwd===cnfNewPwd);
}

function validateDiffPwd(pwd01,pwd02) {
    return !(pwd01===pwd02)
}

function loginPage() {
    window.location.href = 'LoginPage.html';
}