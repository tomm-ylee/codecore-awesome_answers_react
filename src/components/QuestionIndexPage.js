import React from 'react';
import questionData from '../questionData';
import Field from './Field';
import QuestionForm from './QuestionForm'

class QuestionIndexPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: questionData
    }

    this.deleteQuestion = this.deleteQuestion.bind(this)
    this.addQuestion = this.addQuestion.bind(this)
  }

  deleteQuestion (event) {
    const {currentTarget} = event;

    const {questions} = this.state;
    const questionId = parseInt(currentTarget.dataset.id, 10);
    // To delete a question, will have to update the state
    // to version of state where that question is no longer
    // present.
    this.setState({
      questions: questions.filter(question => question.id !== questionId)
    })
  }

  addQuestion (newQuestion) {
    const {questions} = this.state;

    newQuestion.author = {'full_name': 'Dr.Zoidberg'}
    this.setState({
      questions: [
        newQuestion,
        ...questions
      ]
    })
  }

  render() {
    return (
      <main
        className="QuestionIndexPage"
        style={{margin: '0 1rem'}}
      >
        <h2>Questions</h2>
        <QuestionForm onSubmit={this.addQuestion} />
        <ul>
          {
            this.state.questions.map(
              question => (
                <li key={question.id}>
                  <a href="">{question.title}</a>
                  <Field name="Author" value={question.author.full_name} />
                  <button
                    data-id={question.id}
                    onClick={this.deleteQuestion}
                  >
                    Delete
                  </button>
                </li>
              )
            )
          }
        </ul>
      </main>
    )
  }
}

export default QuestionIndexPage
