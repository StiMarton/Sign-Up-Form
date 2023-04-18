function checkPassword() {
let pw1 = document.getElementById("password1").value;
let pw2 = document.getElementById("password2").value;
    if(pw1 != pw2) {
        alert("Passwords did not match");
        console.log("Success");
    } else {
        alert("User created successfully");
        console.log("Failure");
    }
}

checkPassword(pw1, pw2);