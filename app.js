const showModalBtn = document.querySelector(".show-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

function toggleModal(show) {
    modal.classList.toggle("hidden", !show);
    backdrop.classList.toggle("hidden", !show);
}

showModalBtn.addEventListener("click", () => toggleModal(true));
closeModalBtn.addEventListener("click", () => toggleModal(false));
backdrop.addEventListener("click", () => toggleModal(false));

// Optional: Close modal with ESC key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        toggleModal(false);
    }
});
