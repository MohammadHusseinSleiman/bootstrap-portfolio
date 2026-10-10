const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    setTheme(savedTheme);
}

themeToggle.addEventListener("click", () => {
    const currentTheme =
        document.documentElement.getAttribute("data-theme") || "light";

    const newTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
});

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    updateThemeButton(theme);
}

function updateThemeButton(theme) {
    const isDark = theme === "dark";

    themeIcon.className = isDark
        ? "bi bi-sun me-1"
        : "bi bi-moon me-1";

    themeText.textContent = isDark ? "Light" : "Dark";
}