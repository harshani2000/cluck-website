function createObserver(itemClassName, animationClassName) {
  let observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        entry.target.classList.toggle(animationClassName, entry.isIntersecting)
      })
    },
    {
      threshold: 0.5,
    }
  )

  document.querySelectorAll(`.${itemClassName}`).forEach((ele) => {
    observer.observe(ele)
  })
}
