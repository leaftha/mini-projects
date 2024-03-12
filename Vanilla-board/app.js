const ul = document.querySelector(".lists");
fetch("./MOCK_DATA.json")
  .then((response) => response.json())
  .then((data) => {
    for (let i of data) {
      let list = document.createElement("li");
      list.innerHTML = `${i.id}`;
      ul.appendChild(list);
    }
    console.log(data);
  })
  .catch((err) => console.err("error"));
