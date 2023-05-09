class Task {
    constructor(
        public data: string,
        public done: boolean
    ) { }
}


const form = document.querySelector('.new-item-form') as HTMLFormElement

const data = form.querySelector('#task') as HTMLInputElement
let task = new Task(data.value, false)


form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    const radio = document.createElement("input")
    radio.setAttribute("type", "checkbox")
    li.append(radio)
    const p = document.createElement('p')
    p.innerText = data.value
    li.append(p)
    const container: HTMLUListElement = ul!
    container.append(li)
    console.log(data.value)

   

})

