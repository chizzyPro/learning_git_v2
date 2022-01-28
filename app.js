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
}, 2000)
}

