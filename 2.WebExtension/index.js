//1.create twin element from html to js through document.querySeletor
let myInfo = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector(".input-btn");
const ulEl = document.querySelector("#ul-el");
const containerEl = document.querySelector("#container");

inputBtn.addEventListener("click", function () {
  myInfo.push(inputEl.value);
  renderInfo();
});

function renderInfo() {
  let listItems = "";
  for (let i = 0; i < myInfo.length; i++) {
    listItems += "<li>" + myInfo[i] + "</li>";
    console.log(listItems);
    //alternatively:
    //const li = document.createElement('li')
    //li.textContent = myInfo[i]
    //ulEl.append(li)
  }
  //innerHTML should be called outside for list manipulation
  ulEl.innerHTML = listItems;
}

containerEl.innerHTML = "<button>Buy</button>";
containerEl.addEventListener("click", function () {
  containerEl.innerHTML += "<p>Thank you for buying</p>";
});
