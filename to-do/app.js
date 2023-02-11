const list = document.querySelector(".lists");
const lists = document.querySelector(".lists");

let text;

function input(form) {
  text = form["input-text"].value;
  if (text) {
    let newItem = document.createElement("li");
    newItem.classList = "item";
    newItem.innerHTML = `
    <input class="checkbox" type="checkbox" /><span>${text}</span>
  `;
    list.appendChild(newItem);
    form["input-text"].value = "";
  } else {
    alert("not input todo");
  }
}

lists.addEventListener("click", (e) => {
  let check = e.target;
  if (check.checked) {
    check.parentElement.classList.add("check");
  } else {
    check.parentElement.classList.remove("check");
  }
});
