// =================================== Theme Toggle ===================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

// Restore the saved theme
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


// =================================== Mobile Navigation ===================================

const navbarCollapse = document.getElementById("navbarNav");
const navbarLinks = document.querySelectorAll("#navbarNav .nav-link");

navbarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#") || targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (!targetSection) {
            return;
        }

        // Close the mobile menu before scrolling to the target section
        if (
            navbarCollapse.classList.contains("show") &&
            window.innerWidth < 992
        ) {
            event.preventDefault();

            const bsCollapse = bootstrap.Collapse.getOrCreateInstance(
                navbarCollapse
            );

            bsCollapse.hide();

            // Scroll after the menu has finished closing
            navbarCollapse.addEventListener(
                "hidden.bs.collapse",
                () => {
                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                },
                { once: true }
            );
        }
    });
});