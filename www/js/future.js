// on document ready without jquery
document.addEventListener("DOMContentLoaded", function (event) {
  const toggleMenu = () => {
    document.querySelectorAll("main nav, .page-title").forEach(elt => elt.classList.toggle("hide"))
  }
  document.querySelector("header nav a").addEventListener("click", event => {
    event.preventDefault()
    toggleMenu()
  })
})
