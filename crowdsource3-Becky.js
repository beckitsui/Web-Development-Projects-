const container = document.querySelector("#big_calculator_container");
const title = document.createElement("h1")
title.innerHTML = "This is our lovely calculator"
container.append(title)

const calculatorQuestions = [
  {
    title: "What is your householdsize?",
    numberOfOptions: 8,
    listOfOptions: [1,2,3,4,5,6,7,8],
    questionType: "single",
    response: [],
    // answers:{
    //     1: 500,
    //     2: 300,
    //     3: 400,
    //     4: 400,
    //     5: 100,
    // }
  },
  {
    //do we wanna do this as a slider
    title: "What is your income",
    numberOfOptions: 8,
    listOfOptions: ["10000-20000", "20000-30000", "30000-40000", "40000-50000", "50k-60k"],
    questionType: "single",
    response: [],
  },
  {
    title: "how old is your house",
    numberOfOptions: 5,
    listOfOptions: ["<1 year", "2-10years", "20-50years", "freaking old crippling"],
    questionType: "single",
    response: [],
  },
  {
    title: "What are your concerns?",
    numberOfOptions: 5,
    listOfOptions: ['energy bills', 'summer heat', 'solar opportunities', 'others'],
    questionType: "multiple",
    response: [],
  },
  {
    title: "what is your favourite fruit",
    numberOfOptions: 5,
    listOfOptions: ['apple', 'orange', 'grapes', 'banana', 'kiwi'],
    questionType: "multiple",
    response: [],
  },
];

calculatorQuestions.forEach((el, index) => {
  // Grand Parent: create original container that is the parent to specific question
  const calculatorContainer = document.createElement("div");
  calculatorContainer.classList.add("calculator_question_container");

  // Parent A:create the tile
  const questionTitle = document.createElement("h3");
  questionTitle.innerHTML = el.title;

  /** this is called doc string
   * Add all of the other elements here below
   */

  // Parent B - Parent: create parent container of choices
  const choicesContainer = document.createElement("div");
  choicesContainer.classList.add("calculator_choices_container");
  
  // Childrens of Parent B - iterative
  for (let i = 0; i < el.numberOfOptions; i++) {
    const choices = document.createElement("button");
    choices.classList.add("choices_normal");
    choices.innerHTML = el.listOfOptions[i];

    // create a function to handle the click

    function handleClick() {
      /**
       * When it is multi answer, check to see if the number is already selected
       * if selected, then delete form the solutions
       * if not selected, then add to the solutions
       *
       * if not a muilti answer, replace the existing value with this value
       */
      const proposedValue = i;

      if (el.questionType === "multiple") {
        if (el.response.includes(proposedValue)) {
          const indexToRemove = el.response.indexOf(proposedValue);
          el.response.splice(indexToRemove, 1);
        } else {
          el.response.push(proposedValue);
        }
      } else {
        el.response = [proposedValue];
      }
////////////figure it out becky!!!!!
      document.getElementById(`${index}-answer`).innerHTML =
        el.response.join(" ");
    }

    choices.addEventListener("click", handleClick);
    choicesContainer.append(choices);
  }

  const pickedAnswer = document.createElement("div");
  pickedAnswer.id = `${index}-answer`;
  pickedAnswer.innerHTML = el.response;
  choicesContainer.append(pickedAnswer);

  //   append all objects to the parent container
  calculatorContainer.append(questionTitle);
  calculatorContainer.append(choicesContainer);

  //   append the parent container of this question to the existing dom object "#calculator-contain"
  container.append(calculatorContainer);
});
