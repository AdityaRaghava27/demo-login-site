// Save registered user in localStorage
document.addEventListener("DOMContentLoaded", () => {

  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  // Registration logic
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const user = {
        firstName: document.getElementById("firstName").value,
        middleName: document.getElementById("middleName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        username: document.getElementById("reg-username").value,
        password: document.getElementById("reg-password").value,
      };

      localStorage.setItem("demoUser", JSON.stringify(user));
      alert("Registration successful!");
      window.location.href = "index.html";
    });
  }

  // Login logic
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const savedUser = JSON.parse(localStorage.getItem("demoUser"));

      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      if (savedUser && savedUser.username === username && savedUser.password === password) {
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password!");
      }
    });
  }
});
