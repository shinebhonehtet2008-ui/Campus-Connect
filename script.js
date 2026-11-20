
// Welcome message when the website loads
document.addEventListener("DOMContentLoaded", function () {
    console.log("Welcome to Campus-Connect!");

    // Highlight navigation links when clicked
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            console.log("Navigating to: " + link.textContent);
        });
    });
});
