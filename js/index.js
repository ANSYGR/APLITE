document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("menu");
    const body = document.body;

    // Ensure menu starts hidden
    menu.style.left = "-250px";

    menuToggle.addEventListener("click", function () {
        if (menu.style.left === "-250px") {
            menu.style.left = "0";
            body.classList.add("menu-open");
        } else {
            menu.style.left = "-250px";
            body.classList.remove("menu-open");
        }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.style.left = "-250px";
            body.classList.remove("menu-open");
        }
    });
});
