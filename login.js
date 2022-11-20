var form = document.getElementById("frm");
var mssg = document.getElementById("mssg");
var btn = document.getElementsByClassName("submit-btn")[0];
var user = document.getElementById("username");
var logout = document.getElementById("logout");
// form.addEventListener("submit", () => {
//   e.preventDefault();
// });

btn.addEventListener("click", () => {
  mssg.classList.remove("hide");
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5500/index.html";
  }, 1000);
});

// logout.addEventListener("click", () => {
//   window.location.href = "http://127.0.0.1:5500/";
// });
