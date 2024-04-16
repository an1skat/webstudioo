const refs = {
  openBtn: document.querySelector("[data-modal-open]"),
  closeBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector("[data-modal]"),
  overlay: document.querySelector("[data-modal-overlay]"),
};
function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
  refs.overlay.classList.toggle("is-hidden");
  document.body.classList.toggle("no-scroll");
}
refs.openBtn.addEventListener("click", toggleModal);
refs.closeBtn.addEventListener("click", toggleModal);
refs.overlay.addEventListener("click", toggleModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    toggleModal();
  }
});
