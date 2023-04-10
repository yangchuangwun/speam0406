const wasuretatoroku = document.getElementById("wasuretatoroku");
const wasuretaEm = document.getElementById("wasuretaEm");
const btnwasureta = document.querySelector(".btnwasureta");
const speammodoru = document.querySelector(".navbar-brand");

// 忘記密碼頁面的登入
wasuretatoroku.addEventListener("click", () => {
  window.location.href = "speam.html";
});
// 查詢密碼輸入後回傳
btnwasureta.addEventListener("click", () => {
  console.log(document.getElementById("wasuretaEm").value);
});

//點選上面的Speam回到登入首頁
speammodoru.addEventListener("click", () => {
  window.location.href = "speam.html";
});
