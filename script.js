/* ----- REGISTER PAGE VALIDATION ----- */
if (document.getElementById("registerForm")) {

    document.getElementById("registerForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        function check(id, errorId, message) {
            let field = document.getElementById(id);
            let error = document.getElementById(errorId);

            if (field.value.trim() === "") {
                error.textContent = message;
                valid = false;
            } else {
                error.textContent = "";
            }
        }

        check("firstName", "firstNameError", "First name is required");
        check("lastName", "lastNameError", "Last name is required");
        check("email", "emailError", "Email is required");
        check("reg-username", "regUsernameError", "Username is required");
        check("reg-password", "regPasswordError", "Password is required");

        if (valid) {
            alert("Registration successful!");
            window.location.href = "index.html";
        }
    });
}

/* ----- LOGIN PAGE VALIDATION ----- */
if (document.getElementById("loginForm")) {

    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;

        function check(id, errorId, message) {
            let field = document.getElementById(id);
            let error = document.getElementById(errorId);

            if (field.value.trim() === "") {
                error.textContent = message;
                valid = false;
            } else {
                error.textContent = "";
            }
        }

        check("login-username", "login-username-error", "Username is required");
        check("login-password", "login-password-error", "Password is required");

        if (valid) {
            alert("Login successful!");
        }
    });
}
