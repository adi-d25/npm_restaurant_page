
function menuTab() {
    const content = document.getElementById("content")

    content.innerHTML = ""

    const menuPage = document.createElement("div")
    menuPage.classList.add("home")

    const h1 = document.createElement("h1")
    h1.classList.add("menu")
    h1.textContent = "Our Menu"

    const menuIntro = document.createElement("p")
    menuIntro.classList.add("menu-intro")
    menuIntro.textContent = `Every dish is prepared fresh daily using locally sourced ingredients.`

    const menuItems = document.createElement("div")
    menuItems.classList.add("menu-items")

    const menu = {
        0: ["Classic Margherita", "Fresh tomatoes, mozzarella, basil, olive oil"],
        1: ["Golden Spoon Special", "House sauce, slow-roasted vegetables, herbs"],
        2: ["Spiced Chicken Bowl", "Grilled chicken, rice, seasonal greens"]
    }

    let num = 0
    for (let i = 0; i < 3; i++) {
        const menuItem = document.createElement("div")
        menuItem.classList.add("menu-item")

        const h3 = document.createElement("h3")
        h3.textContent = menu[num][0]

        const p = document.createElement("p")
        p.textContent = menu[num][1]

        menuItem.append(h3, p)
        menuItems.append(menuItem)

        ++num
    }

    menuPage.append(h1, menuIntro, menuItems)
    content.append(menuPage)

}

export { menuTab }