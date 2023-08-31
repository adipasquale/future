// on document ready without jquery
document.addEventListener("DOMContentLoaded", function (event) {
  const toggleMenu = () =>
    document.querySelector("main nav").classList.toggle("hide")
  document.querySelector("header nav a").addEventListener("click", event => {
    event.preventDefault()
    toggleMenu()
  })
})
