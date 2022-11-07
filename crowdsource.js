//0. create twin element from html to js through document.querySeletor
const ulEl = document.querySelector(".calculator");


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
console.log(liEl)

let userPreference = []
for (let i=0; i<liEl.length; i++){
  liEl[i].value = 0
//DEBUG: need to select each item that has a class calItem
  liEl[i].addEventListener("click", function(){
    if (liEl[i].value === 0){
      liEl[i].classList.add("selectedButton");
      liEl[i].value = 1
      userPreference.push(liEl[i].textContent);
    }
    else{
      liEl[i].classList.remove("selectedButton")
      liEl[i].value = 0
      userPreference.splice(i,1)
    }
  })
}
