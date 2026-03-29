document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faqbox");

    faqItems.forEach((item) => {
        item.setAttribute("aria-expanded", "false");

        item.addEventListener("click", () => {
            const isOpen = item.classList.toggle("active");
            const icon = item.querySelector("svg");

            item.setAttribute("aria-expanded", String(isOpen));

            if (icon) {
                icon.style.transform = isOpen ? "rotate(45deg)" : "rotate(0deg)";
                icon.style.transition = "transform 0.2s ease";
            }
        });
    });
});
