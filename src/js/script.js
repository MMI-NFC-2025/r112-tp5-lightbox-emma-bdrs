
const lightBox = document.querySelector("#lightbox");

const lightBoxImg = document.querySelector("#lightbox img");

lightBox?.addEventListener("click", () => lightBox.close());

document.body.addEventListener("click", (evt) => {
  if (!evt.target.matches("[data-full-img]")) return;
  lightBoxImg.src = evt.target.dataset.fullImg;
  lightBox.showModal();
});
