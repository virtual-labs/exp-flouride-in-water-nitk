
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "The fluoride electrode is an __________________.",
      answers: {
        a: "Ion Chromatic Sensor",
        b: "Displacement Sensor ",
        c: "Discharge Sensor",
        d: "Ion-Selective Sensor"
      },
      correctAnswer: "d"
    },

    {
      question: "By maintaining pH __________ complex formation of hydrogen fluoride is avoided.",
      answers: {
        a: "Below 5.0",
        b: "Above 5.0",
        c: "Equal to 7.0",
        d: "Above 7.0"
      },
      correctAnswer: "b"
    },

    {
      question: "Interference of hydroxide ion is avoided by maintaining the pH ___________.",
      answers: {
        a: "Below 5.0",
        b: "Above 5.0",
        c: "Equal to 7.0",
        d: "Above 7.0"
    },
      correctAnswer: "a"
    },
    {
        question: "TISAB – Total Ionic Strength Adjusting Buffer is ______________.",
        answers: {
          a: "Chloride Buffer",
          b: "Bromide Buffer",
          c: "Ammonia Buffer",
          d: "Fluoride Buffer"
        },
        correctAnswer: "d"
      },
    {
        question: "Fluoride concentration of___________ causes dental carries.   ",
    answers: {
          a: "Less than 0.2mg/l",
          b: " Greater than 0.2mg/l",
          c: "Less than 0.8 mg/l",
          d: " Greater than 0.8mg/l"
        },
        correctAnswer: "c"
      }
  ];

// ---------------------------- End -------------------------------

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
