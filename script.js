const input = document.querySelector("input");
const button = document.querySelector("button");
const container = document.querySelector(".container");
const body = document.querySelector("body");
let todos = document.querySelector(".todos");

button.addEventListener("click", (e) => {
    e.preventDefault();
    let task = input.value;
    let ans = document.createElement("li");
    ans.classList.add("box");

    ans.innerHTML = `
        <span>${task}</span>
        <div class='btns'>
        <button id="complete">Complete</button>
        <button id="delete">Delete</button>
        </div>
    `;
    todos.append(ans);
});

todos.addEventListener("click", (e) => {
    if (e.target.id === "delete") {
        let itemToDelete = e.target.parentElement.parentElement;
        itemToDelete.remove();
    }
    if (e.target.id === "complete") {
        let span = e.target.parentElement.parentElement.querySelector("span");
        span.classList.toggle("done");
    }
});
