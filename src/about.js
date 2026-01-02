

function aboutTab() {
    const content = document.getElementById("content")

    content.innerHTML = ""

    const aboutPage = document.createElement("div")
    aboutPage.classList.add("about")

    const h1 = document.createElement("h1")
    h1.textContent = "About Us"

    const p1 = document.createElement("p")
    p1.textContent = `The Golden Spoon was founded with one simple idea —
      serve honest food in a warm, welcoming space.`

    const p2 = document.createElement("p")
    p2.textContent = `What started as a small family kitchen has grown into a place
      where people gather to share meals, stories, and moments.`

    const p3 = document.createElement("p")
    p3.textContent = `What started as a small family kitchen has grown into a place
      where people gather to share meals, stories, and moments.`

    aboutPage.append(h1, p1, p2, p3)
    content.append(aboutPage)

}

export { aboutTab }