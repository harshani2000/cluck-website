document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector("#active-dropdown")

  dropdown.addEventListener("mouseover", () => {
    let menu = document.querySelector(".dropdown-box")
    menu.classList.remove("d-none")

    menu.addEventListener("mouseleave", () => {
      menu.classList.add("d-none")
    })
  })
})
