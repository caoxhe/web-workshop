const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");

  themeButton.textContent = isDark
    ? "切换亮色模式"
    : "切换暗色模式";
});
