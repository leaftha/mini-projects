const ul = document.querySelector(".lists");
const select = document.querySelector(".select");
fetch("./MOCK_DATA.json")
  .then((response) => response.json())
  .then((data) => {
    let categorys = new Set();
    for (let user of data) {
      // 카테고리 중복없이 Set에 넣기
      let userCategory = user.category.split("|");
      userCategory.map((item) => {
        categorys.add(item);
      });

      //list만들고 ul태그에 넣기
      let list = document.createElement("li");
      list.innerHTML = `${user.id} - ${user.email}`;
      ul.appendChild(list);
    }

    // 카테고리를 select 태그에 option 태그로 넣기
    for (let category of categorys) {
      let option = document.createElement("option");
      option.setAttribute("value", category);
      option.innerHTML = `${category}`;
      select.appendChild(option);
    }
  })
  .catch((err) => console.error(err));
