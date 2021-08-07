const modal = document.querySelector(".modal");
const lowImages = document.querySelectorAll(".gallery img");
const highImage = document.querySelector(".full-img");
var imageText = document.querySelector(".caption");

lowImages.forEach((lowImage) => {
  lowImage.addEventListener("click", () => {
    modal.classList.add("open");
    highImage.classList.add("open");
    // Dynamically change image and text
    // image
    const highImageSrc = lowImage.getAttribute("data-original");
    console.log(highImageSrc);
    highImage.src = highImageSrc;
    // text
    const altText = lowImage.alt;
    console.log(altText);
    imageText.innerHTML = altText;
  });
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    highImage.classList.remove("open");
  }
});
