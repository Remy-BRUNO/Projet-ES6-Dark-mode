const container = document.querySelector(".container")
const btn = document.querySelector(".dark")

// dark mode
btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme")
})

// articles
const displyAricles = (obj) => {
  const newArticle = obj.map((item) => {
    const { title, date, length, snippet } = item
    const formate = new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" })
    const dateForm = formate.format(date)
    return `
    <h2 class="subTitle">${title}</h2>
    <p class="info">
      <span class="date">${dateForm}</span>  
      <span class="length">${length} read time</span>
    </p>
    <p class="desc">
      ${snippet}
    </p>
      `
  })
  container.innerHTML = newArticle.join("")
}
displyAricles(articles)
