// Create Two Functions -> addChild and redWedding

const starks = document.querySelector(".starks")


function addChild() {
const child = document.createElement("div")
  document.querySelector(".starks").appendChild(child)
  child.textContent = `kiddo`
  starks.classList.add(`child`)
  starks.appendChild(child)
  
}
function redWedding() {
    while(starks.firstChild) {
      starks.firstChild.remove();
    }
    console.log("done");
  }
// Attach functions to buttons
const addBtn = document.querySelector("#add-child")
addBtn.addEventListener("click", addChild)
const redWeddingBtn = document.querySelector("#red-wedding")
redWeddingBtn.addEventListener("click", redWedding)
// The addChild function creates new div & appends it to the starks div
// The redWedding function removes ALL stark children (loop)