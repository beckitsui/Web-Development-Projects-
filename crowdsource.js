//class creates objects in js
// `text ${object in js} `
const listConcerns1 = ['energy bills', 'summer heat', 'solar opportunities', 'others']
const listConcerns2 = ['placeholder','placeholder','placeholder','placeholder','placeholder']
const listConcerns3 = ['placeholder','placeholder','placeholder','placeholder','placeholder']
const listConcerns4 = ['placeholder','placeholder','placeholder','placeholder','placeholder']
const listConcerns5 = ['placeholder','placeholder','placeholder','placeholder','placeholder']

//create list of all concerns
const all_concerns = [listConcerns1,listConcerns2,listConcerns3,listConcerns4,listConcerns5]

const calculatorContainer = document.querySelector(".calculator-contain");

class Calculator{
  //setup: constructor run once when creating the object
  constructor(listConcern){  //match with each <select> 
    this.listConcern = document.createElement('div');
    this.listConcern.classList.add('select_grid');

    //access each list in all_concerns
    for (let c = 0; c < listConcern.length; c++){
      const itemElement = document.createElement('div')
      itemElement.classList.add("select__item");
      itemElement.textContent = listConcern[c];
      //console.log(itemElement)
      this.listConcern.appendChild(itemElement);
      //console.log(this.listConcern)
      //click changes!!!
      itemElement.addEventListener("click",()=>{
        if(itemElement.classList.contains("select__item--selected")){
          this._deselect(itemElement);
        }
        else{
          this._select(itemElement);
        }
      })
    }
    
  }

  //create method
  _select(itemElement){
    const index = Array.from(this.listConcern.children).indexOf(itemElement);
    console.log(index);
    this.originalSelect.querySelectorAll('option')[index].selected = false;

    itemElement.classList.remove("select__item--selected");
  }

  _deselect(itemElement){
    const index = Array.from(this.listConcern.children).indexOf(itemElement);
    this.originalSelect.querySelectorAll('option')[index].selected = true;
 
    itemElement.classList.add("select__item--selected");
    
  }
}


for (let c = 0; c < all_concerns.length; c++){
  let concern = new Calculator(all_concerns[c]);
  calculatorContainer.innerHTML += concern;
}





// //0. create twin element from html to js through document.querySeletor
// const ulEl = document.querySelector(".calculator");


// //1.create calculator items


// //2.parse the function
// populateItems(listConcerns1);
// populateItems(listConcerns2);
// populateItems(listConcerns3);
// populateItems(listConcerns4);
// populateItems(listConcerns5);

// //3.minor styling
// const selectedColor = "salmon"

// //functions
// function populateItems(InfoList) {
//   let listItems = "";
//   for (let i = 0; i < InfoList.length; i++) {
//     listItems += `<li class='calItem'> ${InfoList[i]} </li>`
//   }
//   ulEl.innerHTML += `<div class='calSubGroup'> Title(to work on changing line) ${listItems} </li>`;
// }

// let liEl = document.getElementsByClassName("calItem")
// console.log(liEl)

// let userPreference = []
// for (let i=0; i<liEl.length; i++){
//   liEl[i].value = 0
// //DEBUG: need to select each item that has a class calItem
//   liEl[i].addEventListener("click", function(){
//     if (liEl[i].value === 0){
//       liEl[i].classList.add("selectedButton");
//       liEl[i].value = 1
//       userPreference.push(liEl[i].textContent);
//     }
//     else{
//       liEl[i].classList.remove("selectedButton")
//       liEl[i].value = 0
//       userPreference.splice(i,1)
//     }
//   })
// }
