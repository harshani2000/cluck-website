document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form")
  let error = document.querySelector(".error")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let msg = e.target.msg.value
    let name = e.target.name.value

    if (!msg || !name) {
      error.classList.remove("d-none")

      setTimeout(() => {
        error.classList.add("d-none")
      }, 2000)
      return
    }

    let m = `Name:- ${
      name.charAt(0).toUpperCase() + name.slice(1)
    } \nMessage:-${msg}`

    window.location = `https://api.whatsapp.com/send?phone=+94770481685&text=${m}`
  })
})
