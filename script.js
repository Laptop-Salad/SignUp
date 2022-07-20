function checkPass() {
    let password = document.getElementById('pass');
    let cpassword = document.getElementById('cpass');
    let noMatch = document.getElementById('no-match');
    let submit = document.getElementById('submit');

    console.log(password.value);
    console.log(cpassword.value);

    if (password.value == cpassword.value) {
        password.style.borderColor = "greenyellow";
        cpassword.style.borderColor = "greenyellow";
        submit.disabled = false;

        noMatch.style.display = "none";
    } else {
        password.style.borderColor = "red";
        cpassword.style.borderColor = "red";
        submit.disabled = true;

        noMatch.style.display = "block";      
    }
}