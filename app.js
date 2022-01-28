function createDiv(message, className){
const div = document.createElement('div')
div.className = className
div.appendChild(document.createTextNode(message))

const container = document.querySelector(.container)
const form = document.querySelector(.form)

container.insertBefore(div, form)

setTimeout(() => {
	if(document.querySelector(.className)){
	document.querySelector(.className).remove()
	}
}, 2000)}


function setLocalStorage(store){
let item;
if(!localStorage.getItem(store)){
item = []
}
item.push(store)
localStorage.setItem(JSON.stringify(item))
}

