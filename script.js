function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Guardar la preferencia del usuario en localStorage
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
}

// Aplicar el tema guardado al cargar la página
window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};