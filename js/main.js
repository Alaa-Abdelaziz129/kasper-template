let shuffleLis = document.querySelectorAll(".shuffle li");
let imgs = Array.from(document.images);

// remove active li from all add current
shuffleLis.forEach((li) => {
  li.addEventListener("click", removeActive)
  li.addEventListener("click", manageImages)
})

function removeActive() {
  shuffleLis.forEach((li) => {
    li.classList.remove("active")
    this.classList.add("active")
  })
}

// manage images
function manageImages() {
  imgs.forEach((imgs) => {
    imgs.style.display = "none"
  })
  document.querySelectorAll(this.dataset.work).forEach((el) => {
    el.style.display = "block"
  })
}