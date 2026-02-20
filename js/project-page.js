import { projects } from "./projects.js"

// Itens do dom
const techList = document.querySelector(".tech-list")
const githubBtn = document.querySelector(".github-btn")
const onlineBtn = document.querySelector(".online-btn")
const text = document.querySelector(".text")
const gallery = document.querySelector(".gallery")

//  Pegando id na url para acessar o projeto
const params = new URLSearchParams(window.location.search)
const projectId = params.get("id")

const project = projects.find(p => p.id === projectId)

document.querySelector("h1").textContent = project.title
document.querySelector(".short-description").textContent = project.subtitle

// Lista de tecnologias
const fragment = document.createDocumentFragment()

project.tags.tech.forEach(tech => {
    const li = document.createElement("li")
    const img = document.createElement("img")
    const span = document.createElement("span")

    li.classList.add("tech-item")
    img.src = `../../assets/icons/tech/${tech.toLowerCase()}.svg`
    img.alt = `ícone da tech ${tech}`
    img.width = 14
    img.height = 14
    img.loading = "lazy"

    span.textContent = tech
    li.append(img, span)

    fragment.appendChild(li)
})

techList.appendChild(fragment)

// Botões
githubBtn.href = project.github
onlineBtn.href = project.live

// Texto do projeto

const textFragment = document.createDocumentFragment()

project.sections.forEach(section => {
    if (section.title) {
        const h2 = document.createElement("h2")
        h2.textContent = section.title
        textFragment.appendChild(h2)
    }
    if (section.type === "text") {
        const p = document.createElement("p")
        p.textContent = section.content
        textFragment.appendChild(p)
    } else if (section.type === "list") {
        const ul = document.createElement("ul")

        section.items.forEach(item => {
            const li = document.createElement("li")
            li.textContent = item
            ul.appendChild(li)
        })
        textFragment.appendChild(ul)
    }
})

text.appendChild(textFragment)

// Imagens do Projeto

const imgFragment = document.createDocumentFragment()

project.images.forEach(image => {
    const figure = document.createElement("figure")
    const imgWrapper = document.createElement("div")
    const img = document.createElement("img")
    const figcaption = document.createElement("figcaption")

    imgWrapper.classList.add("img-wrapper")
    img.src = image.src
    img.alt = image.title
    img.loading = "lazy"
    imgWrapper.appendChild(img)

    figcaption.textContent = image.title

    if (image.src.includes("mobile")) {
        figure.setAttribute("data-type", "mobile")
    }

    figure.append(imgWrapper, figcaption)

    imgFragment.appendChild(figure)
})

gallery.appendChild(imgFragment)
