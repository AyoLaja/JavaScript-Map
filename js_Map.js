//JS MAP EXAMPLE from @fidalgo.dev on Instagram
const question = new Map();

question.set('question', `How many countries are in Africa?`)
question.set(1, '47')
question.set(2, '61')
question.set(3, '54')
question.set(4, '33')
question.set(5, '48')
question.set('correct', 3)
question.set(true, `Correct!!!`)
question.set(false, `Sorry, try again!`)

function displayQuestionPrompt() {
    //Displaying the options
    for (let [key, value] of question) {
        if (typeof key === 'number') {
            console.log('Option ' + key + ': ' + value)
        }
    }

    //Displaying promt and assigning promt imput to answer variable
    answer = parseInt(prompt('Type your option number: '))
    console.log('Your answer is Option: ' + answer)

    checkAnswer()
}

function checkAnswer() {
    console.log('Checking answer...')
    
    setTimeout(function() {
        console.log(question.get(answer === question.get('correct')))
        
        if (answer !== question.get('correct')) {
            displayQuestionPrompt()
        }
    }, 2000)
}

//Displaying the question
console.log(question.get('question'))

var answer = 0;

displayQuestionPrompt()


