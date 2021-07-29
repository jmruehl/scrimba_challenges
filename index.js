let emojis = ['🌞', '🛼', '💚']
const startBtn = document.getElementById('start-btn')
const emojisContainer = document.getElementById('emojis-container')
const btnsContainer = document.getElementById('btns-container')
const addBtn = document.getElementById('add-btn')
const deleteBtn = document.getElementById('delete-btn')
const inputContainer = document.getElementById('input-container')
const input = document.getElementById('input')
const pushBtn = document.getElementById('push-btn')
const unshiftBtn = document.getElementById('unshift-btn')
const deleteBtnsContainer = document.getElementById('delete-btns-container')
const popBtn = document.getElementById('pop-btn')
const shiftBtn = document.getElementById('shift-btn') 
const deleteEmojisContainer = document.getElementById('delete-emojis-container')


//Render Functions

function renderElement(el, val1, val2, val3) {
    el.style.transform = `translate(-50%, -50%) scale(${val1})`
    el.style.transition = `all 3s ease ${val2}s`
    el.style.top = `${val3}%`
}

function renderEmojis(container, el, val1, val2, val3, val4) {
    container.textContent = ''
    let p = document.createElement('p')
    el.forEach(el => (
        p.textContent += `${el} `
    ))
    if(val4) {
        let heading = document.createElement('h1')
        heading.textContent = `Merle's Emojis`
        container.append(p, heading)
    } else {
        container.append(p)
    }
    renderElement(container, val1, val2, val3)  
}


//Run Programm 

renderElement(startBtn, 1.5)

//Event Listeners

startBtn.addEventListener('click', function() {
    renderElement(startBtn, 0, 0, 50)
    renderEmojis(emojisContainer, emojis, 2, 2, 40, true)
    renderElement(btnsContainer, 2, 2, 60)
})

addBtn.addEventListener('click', function() {
    renderElement(btnsContainer, 0, 0, 50)
    renderElement(inputContainer, 1, 1.5, 60)
})

unshiftBtn.addEventListener('click', function() {
    emojis.unshift(input.value)
    input.value = ''
    renderEmojis(emojisContainer, emojis, 2, 0, 40, true)
    renderElement(inputContainer, 0, 0, 50)
    renderElement(btnsContainer, 2, 1.5, 60)
})

pushBtn.addEventListener('click', function() {
    emojis.push(input.value)
    input.value = ''
    renderEmojis(emojisContainer, emojis, 2, 0, 40, true)
    renderElement(inputContainer, 0, 0, 50)
    renderElement(btnsContainer, 2, 1.5, 60)
})

deleteBtn.addEventListener('click', function() {
    let deleteEmojis =[emojis[0], emojis[emojis.length -1]] 
    renderElement(btnsContainer, 0, 0, 50)
    renderEmojis(deleteEmojisContainer, deleteEmojis, 2, 1.5, 60)
    renderElement(deleteBtnsContainer, 2, 1.5, 60)
})

shiftBtn.addEventListener('click', function() {
    emojis.shift()
    renderEmojis(emojisContainer, emojis, 2, 0, 40, true)
    renderElement(deleteBtnsContainer, 0, 0, 50)
    renderElement(deleteEmojisContainer, 0, 0, 50)
    renderElement(btnsContainer, 2, 1.5, 60)
})


popBtn.addEventListener('click', function() {
    emojis.pop()
    renderEmojis(emojisContainer, emojis, 2, 0, 40, true)
    renderElement(deleteBtnsContainer, 0, 0, 50)
    renderElement(deleteEmojisContainer, 0, 0, 50)
    renderElement(btnsContainer, 2, 1.5, 60)
})

emojisContainer.addEventListener('click', function() {
    renderElement(emojisContainer, 0, 0, 50, true)
    renderElement(btnsContainer, 0, 0, 50)
    renderElement(startBtn, 1, 1.5, 50)
})