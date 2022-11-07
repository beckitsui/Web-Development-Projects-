//0. create twin element from html to js through document.querySeletor
const ulEl = document.querySelector(".calculator");
let userPreference = []


//1.create calculator items
const listConcerns1 = ['energy bills', 'summer heat', 'solar opportunities', 'others']
const listConcerns2 = ['placeholder','placeholder','placeholder','placeholder','placeholder']
const listConcerns3 = ['placeholder','placeholder','placeholder','placeholder','placeholder']
const listConcerns4 = ['placeholder','placeholder','placeholder','placeholder','placeholder']
const listConcerns5 = ['placeholder','placeholder','placeholder','placeholder','placeholder']


//2.parse the function
populateItems(listConcerns1);
populateItems(listConcerns2);
populateItems(listConcerns3);
populateItems(listConcerns4);
populateItems(listConcerns5);

//3.minor styling
const selectedColor = "salmon"

//functions
function populateItems(InfoList) {
  let listItems = "";
  for (let i = 0; i < InfoList.length; i++) {
    listItems += `<li class='calItem'> ${InfoList[i]} </li>`
  }
  ulEl.innerHTML += `<div class='calSubGroup'> Title(to work on changing line) ${listItems} </li>`;
}

let liEl = document.getElementsByClassName("calItem")

for (let i=0; i<liEl.length; i++){
  liEl[i].addEventListener("click", function(){
    if (!(liEl[i].textContent in userPreference)){  //this line doesn't work need debug
      console.log(liEl[i].textContent)
      userPreference.push(liEl[i].textContent);
    }
    liEl[i].style.background = selectedColor;
    console.log(userPreference);
  })
}
