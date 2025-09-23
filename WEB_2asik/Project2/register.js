window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const registerBtn = document.getElementById("register-btn");
  const userArea = document.getElementById("user-area");

  if (user) {
    // Если пользователь уже есть → показываем иконку профиля
    if (registerBtn) registerBtn.style.display = "none";
    if (userArea) {
      userArea.style.display = "inline-block";
      userArea.onclick = () => window.location.href = "profile.html";
      userArea.textContent = "👤";
    }
  } else {
    // Если пользователя нет → показываем кнопку регистрации
    if (registerBtn) {
      registerBtn.style.display = "inline-block";
      registerBtn.onclick = () => window.location.href = "register.html";
    }
    if (userArea) userArea.style.display = "none";
  }

  // Обработка формы регистрации
  const form = document.getElementById("register-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      const user = { username, phone, email, password, avatar: null, friends: [] };
      console.log("User saved:", user);

      localStorage.setItem("user", JSON.stringify(user));
      alert("Registration successful!");
      window.location.replace("profile.html");
    });
  }
});

