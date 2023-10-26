function generateCaptcha() {
  const captchaText = Math.random().toString(36).substring(2, 8);
  document.getElementById("captcha-text").textContent = captchaText;
}

generateCaptcha();

function checkCaptcha() {
  const userInput = document.getElementById("user-input").value;
  const captchaText = document.getElementById("captcha-text").textContent;

  if (userInput === captchaText) {
    alert("CAPTCHA correto!");
    generateCaptcha();
  } else {
    alert("CAPTCHA incorreto. Tente novamente.");
  }
}
