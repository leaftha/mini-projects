const ul = document.querySelector(".lists");
const select = document.querySelector(".select");
const formBtn = document.querySelector(".formBtn");
let data = []; // 데이터를 전역 변수로 저장하여 나중에 필터링에 사용

fetch("./MOCK_DATA.json")
  .then((response) => response.json())
  .then((jsonData) => {
    data = [...jsonData];
    data = jsonData; // 데이터를 전역 변수에 저장
    let categorys = new Set();
    for (let user of jsonData) {
      let userCategory = user.category.split("|");
      userCategory.map((item) => {
        categorys.add(item.trim()); // trim()을 사용하여 공백을 제거하여 정확한 비교를 보장
      });
      let list = document.createElement("li");
      list.innerHTML = `${user.id} - ${user.email} - ${user.category}`;
      ul.appendChild(list);
    }
    for (let category of categorys) {
      let option = document.createElement("option");
      option.setAttribute("value", category);
      option.innerHTML = `${category}`;
      select.appendChild(option);
    }
  })
  .catch((err) => console.error(err));

select.addEventListener("change", (e) => {
  let value = select.value;
  let categoryData = [];

  // ul내의 li들 삭제
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }

  // Any가 아닌 선택지 일 경우 해당 카테고리가 존재하는 데이터만 배열에 저장
  // list dom 생성 추가
  if (value != "Any") {
    data.map((item) => {
      let itemCategory = item.category.split("|");
      if (itemCategory.includes(value)) {
        categoryData.push(item);
      }
    });

    for (let user of categoryData) {
      let list = document.createElement("li");
      list.innerHTML = `${user.id} - ${user.email} - ${user.category}`;
      ul.appendChild(list);
    }
  } else {
    for (let user of data) {
      let list = document.createElement("li");
      list.innerHTML = `${user.id} - ${user.email} - ${user.category}`;
      ul.appendChild(list);
    }
  }
});

formBtn.addEventListener("click", () => {
  const form = document.querySelector(".form");
  for (let i = 0; i < form.length; i++) {
    console.log(form[i].value);
  }
});
