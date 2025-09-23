let isRegistered = true; // false = не зарегистрирован, true = зарегистрирован
const userArea = document.getElementById("user-area");
const logo = document.getElementById("logo");

if (isRegistered) {
  // показываем иконку пользователя
  const userIcon = document.createElement("img");
  userIcon.src="defaultAva.png"; // можно заменить на иконку или первую букву имени
  userIcon.style.width = "50px";
  userIcon.style.height = "55px";
  userIcon.onclick = () => { window.location.href = "profile.html";};
  userArea.appendChild(userIcon);
  userArea.style.marginTop = "-15px";
} else {
  // показываем кнопку регистрации
  const register = document.createElement("button");
  register.textContent = "Registrate";
  logo.style.marginLeft = "25%";
  register.style.fontSize = "20px";
  register.style.padding = "0px 15px";
  register.onclick = () => { window.location.href = "register.html";};
  userArea.appendChild(register);
}