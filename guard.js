// guard.js — Protects restricted pages

const activeUser = JSON.parse(localStorage.getItem("activeUser"));

// Restore session if sessionStorage is cleared
if (activeUser && !sessionStorage.getItem("role")) {
  sessionStorage.setItem("username", activeUser.username);
  sessionStorage.setItem("displayName", activeUser.displayName);
  sessionStorage.setItem("role", activeUser.role);
}

// Block access if no session
if (!sessionStorage.getItem("role")) {
  alert("Please login first.");
  location.href = "index.html";
}