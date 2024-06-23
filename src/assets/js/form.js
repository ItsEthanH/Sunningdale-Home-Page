document.querySelectorAll(".form-button").forEach((button) => {
    const form = document.getElementById("cs-form-1150");

    button.addEventListener("click", () => {
        document.body.classList.add("form-active");
    });
});

document.getElementById("close-form").addEventListener("click", () => {
    document.body.classList.remove("form-active");
});

document.body.addEventListener("click", (e) => {
    if (e.target.tagName === "BODY" && e.target.classList.contains("form-active")) {
        document.body.classList.remove("form-active");
    }
});