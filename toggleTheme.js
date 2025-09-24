function applyTheme() {
  const theme = localStorage.getItem("theme") || "light"; // light by default
  const logo = document.getElementById("logo");
  const miniLogo = document.getElementById("miniLogo");

  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    if (logo) logo.src = "Logos/logoB.png";
    if (miniLogo) miniLogo.src = "Logos/logoBmini.png";
  } else {
    document.body.classList.remove("dark-theme");
    if (logo) logo.src = "Logos/logoW.png";
    if (miniLogo) miniLogo.src = "Logos/logoWmini.png";
  }
}

function toggleTheme() {
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
  applyTheme(); // we immediately update the display
}


document.addEventListener("DOMContentLoaded", applyTheme);