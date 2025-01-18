let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0, k = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    if (k==0) {
        saveEl.textContent += count
        k++
    }
    else {
        saveEl.innerText += " - " + count
    }
    countEl.textContent = 0
    count = 0
}
