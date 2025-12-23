// ====== Theme Toggle ======
const toggleBtn = document.getElementById("theme-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Save preference
        const isDark = document.body.classList.contains("dark");
        localStorage.setItem("velto-theme", isDark ? "dark" : "light");
    });
}

// Load saved theme
const savedTheme = localStorage.getItem("velto-theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
}
