// on document ready without jquery
document.addEventListener("DOMContentLoaded", function (event) {
  const toggleMenu = () => {
    document.querySelectorAll("header nav.menu, .page-title").forEach(elt => elt.classList.toggle("hide"))
  }
  document.querySelector("header nav.menu-link a").addEventListener("click", event => {
    event.preventDefault()
    toggleMenu()
  })
})
