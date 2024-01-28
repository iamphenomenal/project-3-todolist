let inp = document.getElementById("inputbox");
let btn = document.querySelector("button");
let list = document.getElementById("list-container");
function add() {
  if (inp.value === "") {
    alert("enter something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inp.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inp.value = "";
}
list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);
