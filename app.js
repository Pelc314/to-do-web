"use strict";
class Task {
    constructor(data, done) {
        this.data = data;
        this.done = done;
    }
}
const form = document.querySelector('.new-item-form');
const data = form.querySelector('#task');
let task = new Task(data.value, false);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const radio = document.createElement("input");
    radio.setAttribute("type", "checkbox");
    li.append(radio);
    const p = document.createElement('p');
    p.innerText = data.value;
    li.append(p);
    const container = ul;
    container.append(li);
    console.log(data.value);
});
