class BooleanQuestion {
  constructor(description){
    this.description = description;
  }

  printQuestionChoices() {
    console.log('1. True');
    console.log('2. False');
  }
}

class MultipleChoiceQuestion {
  constructor(description, options){
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description){
    this.description = description;
  }

  printQuestionChoices() {
    console.log('Answer: _______');
  }
}

// open to extentions like the classes we made above
// closed for modifications
function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log('');
  });
}

const questions = [
  new BooleanQuestion('This is useful'),
  new MultipleChoiceQuestion(
    'What is your favourite language?',
    ['CSS', 'HTML', 'JS', 'Python'],
  ),
  new TextQuestion('Describe your favourite feature')
];

printQuiz(questions);
