
import restaurantImage from "./restaurant.png"

function homeTab() {
    const content = document.getElementById("content")

    content.innerHTML = ""
    
    const image = document.createElement("img")
    image.classList.add("res-image")
    image.src = restaurantImage
    content.append(image)

    const home = document.createElement("div")
    home.classList.add("home")

    const h1 = document.createElement("h1")
    h1.textContent = "The Golden Spoon"

    const p1 = document.createElement("p")
    p1.textContent = `Welcome to The Golden Spoon — a cozy place where fresh ingredients,
      traditional recipes, and warm hospitality come together.`

    const p2 = document.createElement("p")
    p2.textContent = `From slow-cooked meals to handcrafted desserts, everything is made
      with care and served with love.`

    home.append(h1, p1, p2)
    content.append(home)

}

export { homeTab }