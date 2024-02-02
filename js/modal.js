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
// const inputs = [document.getElementById('input1'), document.getElementById('input2'), document.getElementById('input3')];
// const svgs = [document.getElementById('svg1'), document.getElementById('svg2'), document.getElementById('svg3')];

// inputs.forEach((input, index) => {
//   input.addEventListener('focus', () => {
//     changeSvgColor(svgs[index]);
//   });

//   input.addEventListener('blur', () => {
//     resetSvgColor(svgs[index]);
//   });
// });

// function changeSvgColor(svgElement) {
//   svgElement.style.fill = 'var(--accent-color)';
// }

// function resetSvgColor(svgElement) {
//   svgElement.style.fill = '#000';
// }
