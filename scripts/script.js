function searchToggle() {
  document.getElementById('searchFormInput').classList.toggle('search-form__input_show');
  document.getElementById('headerLogo').classList.toggle('header__logo_hide');
}

function quizShowResults() {
  quiz.checkAnswers(false);
  quiz.highlightResults(quizHandleAnswers);
}

function quizHandleAnswers(quiz, question, no, correct) {
  if (!correct) {
    var answers = question.getElementsByTagName('input');
    for (var i = 0; i < answers.length; i++) {
      // If the current input element is part of the correct answer, highlight it
      if (quiz.answers[no].indexOf(answers[i].value) > -1) {
        answers[i].parentNode.classList.add(Quiz.Classes.CORRECT);
      }

    }
  }
}
