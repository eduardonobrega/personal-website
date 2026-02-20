import { projects } from "./projects.js"

const availableIcons = {
    area: {
        backend: "area/backend.svg",
        design: "area/design.svg",
        frontend: "area/frontend.svg",
        fullstack: "area/fullstack.svg",
    },
    tech: {
        css: "tech/css.svg",
        figma: "tech/figma.svg",
        github: "tech/github.svg",
        html: "tech/html.svg",
        javascript: "tech/javascript.svg",
        node: "tech/node.svg",
        react: "tech/react.svg",
        sass: "tech/sass.svg",
        styled_components: "tech/styled-components.svg",
        typescript: "tech/typescript.svg",
    },
}

const projectsLista = document.querySelector("#projects > ul")

function createTag(tag, area) {
    const tagLi = document.createElement("li")
    tagLi.classList.add("tag")

    const fileName = tag.toLowerCase().replace(/-/g, "_")

    if (availableIcons[area]?.[fileName]) {
        const icon = document.createElement("img")
        icon.src = `../../assets/icons/${availableIcons[area][fileName]}`
        icon.alt = `${tag} icon`
        icon.width = 12
        icon.height = 12

        tagLi.appendChild(icon)
    }

    // se der erro → simplesmente não faz nada

    tagLi.appendChild(document.createTextNode(tag))

    return tagLi
}

function createProjectListCard(project) {
    const li = document.createElement("li")
    li.classList.add("project-card")

    const link = document.createElement("a")
    link.href = `../projects/index.html?id=${project.id}`

    // IMAGEM
    const img = document.createElement("img")
    img.src = project.cover
    img.alt = `Imagem do projeto ${project.title}`
    img.width = 400
    img.height = 230
    img.loading = "lazy"

    // CONTAINER DE TEXTO
    const contentDiv = document.createElement("div")

    const h3 = document.createElement("h3")
    h3.textContent = project.title

    const subtitle = document.createElement("span")
    subtitle.classList.add("project-name")
    subtitle.textContent = project.subtitle

    // LISTA DE TAGS
    const tagsList = document.createElement("ul")
    tagsList.classList.add("tags")

    project.tags?.tech?.forEach(tag => {
        tagsList.appendChild(createTag(tag, "tech"))
    })

    project.tags?.area?.forEach(tag => {
        tagsList.appendChild(createTag(tag, "area"))
    })

    // Montagem
    contentDiv.appendChild(h3)
    contentDiv.appendChild(subtitle)
    contentDiv.appendChild(tagsList)

    link.appendChild(img)
    link.appendChild(contentDiv)
    li.appendChild(link)

    return li
}

const fragment = document.createDocumentFragment()

projects.forEach(project => {
    fragment.appendChild(createProjectListCard(project))
})

projectsLista.appendChild(fragment)
