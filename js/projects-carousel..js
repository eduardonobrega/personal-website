import { projects } from "./projects.js"

const pinProjects = projects.filter(p => p.pin)
const carousel = document.querySelector(".carousel-track")

function createProjectCard(project, index) {
    const li = document.createElement("li")
    li.classList.add("card")

    if (index === 0) {
        li.classList.add("focus")
    }

    const imgBox = document.createElement("a")
    imgBox.classList.add("card-img-box")
    imgBox.href = `./pages/projects/index.html?id=${project.id}`

    const img = document.createElement("img")
    img.src = project.cover
    img.alt = `Capa do projeto ${project.title}`
    img.loading = "lazy"

    const btn = document.createElement("span")
    btn.classList.add("card-button")
    btn.setAttribute("aria-label", `Ver mais sobre ${project.title}`)
    btn.textContent = "Ver mais"

    const arrow = document.createElement("img")
    arrow.src = "./assets/icons/arrow-cool-white.svg"
    arrow.width = 18
    arrow.height = 18
    arrow.alt = ""

    btn.appendChild(arrow)

    imgBox.appendChild(img)
    imgBox.appendChild(btn)

    const textDiv = document.createElement("div")
    textDiv.classList.add("card-text")

    const h3 = document.createElement("h3")
    h3.textContent = project.title

    const span = document.createElement("span")
    span.textContent = project.subtitle

    textDiv.appendChild(h3)
    textDiv.appendChild(span)

    li.appendChild(imgBox)
    li.appendChild(textDiv)

    return li
}

pinProjects.forEach((project, index) => {
    const card = createProjectCard(project, index)

    carousel.appendChild(card)
})
