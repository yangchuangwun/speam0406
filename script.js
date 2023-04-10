// 用document.querySelector() 找html裡面clss
const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");
const Donwload = document.getElementById("dowbtn");
const downloadLink =
  "https://cdn.cloudflare.steamstatic.com/client/installer/SteamSetup.exe";
const btnregister = document.querySelector(".btnregister");
const btntoroku = document.querySelector(".btntoroku");

// 忘記密碼跳轉另一個頁面
const wasuretabtn = document.getElementById("passwordwasureta");

// 點登入畫面的點我創見會跳到註冊畫面
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
// 點註冊內視窗內的登入會跳到 登入畫面
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

//  點登入之後會彈出視窗
btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});
// 點 X 之後會隱藏視窗
iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
// 下載按鈕超連結
Donwload.addEventListener("click", () => {
  window.location.href = downloadLink;
});

// 忘記密碼頁面的查詢
wasuretabtn.addEventListener("click", () => {
  window.location.href = "wasuretaspeam.html";
});

//點創建回傳Us
btnregister.addEventListener("click", () => {
  console.log(document.getElementById("Us").value);
});

//點創建回傳Em
btnregister.addEventListener("click", () => {
  console.log(document.getElementById("Em").value);
});

//點創建回傳Ps
btnregister.addEventListener("click", () => {
  console.log(document.getElementById("Ps").value);
});

//點登陸回傳Email
btntoroku.addEventListener("click", () => {
  console.log(document.getElementById("torokuEm").value);
});

//點登陸回傳password
btntoroku.addEventListener("click", () => {
  console.log(document.getElementById("torokupassword").value);
});
