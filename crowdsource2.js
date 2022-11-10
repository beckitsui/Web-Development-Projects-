const containter = document.querySelector("#calculator-contain");

const calculatorQuestions = [
  {
    title: "What is your address",
    numberOfOptions: 5,
    questionType: "multiple",
    response: 2,
    answers:{
        1: 500,
        2: 300,
        3: 400,
        4: 400,
        5: 100,
    }
  },
  {
    title: "What is your income",
    numberOfOptions: 5,
    questionType: "single",
    response: [],
  },
  {
    title: "how old is your house",
    numberOfOptions: 5,
    questionType: "single",
    response: [],
  },
  {
    title: "how tall are you",
    numberOfOptions: 5,
    questionType: "multiple",
    response: [],
  },
  {
    title: "what is your favourite fruit",
    numberOfOptions: 5,
    questionType: "multiple",
    response: [],
  },
];

calculatorQuestions.forEach((el, index) => {
  // create original container that is the parent to specific question
  const questionContainer = document.createElement("div");
  questionContainer.style.backgroundColor = "red";

  //   create the tile
  const questionTitle = document.createElement("h3");
  questionTitle.innerHTML = el.title;

  /**
   * Add all of the other elements here below
   */

  //   create parent container of choices
  const choicesContainer = document.createElement("div");
  choicesContainer.style.display = "grid";
  choicesContainer.style.gridTemplateColumns = "repeat(6, 1fr)";
  choicesContainer.style.gap = "1rem";

  for (let i = 0; i < el.numberOfOptions; i++) {
    const choices = document.createElement("button");
    choices.style.backgroundColor = "blue";
    choices.innerHTML = "Hi";

    // create a function to handle the click

    function handleClick() {
      /**
       * When it is multi answer, check to see if the number is already selected
       * if selected, then delete form the solutions
       * if not selected, then add to the solutions
       *
       * if not a muilti answer, replace the existing value with this value
       */
      const proposedValue = i + 1;

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
  questionContainer.append(questionTitle);
  questionContainer.append(choicesContainer);

  //   append the parent container of this question to the existing dom object "#calculator-contain"
  containter.append(questionContainer);
});
