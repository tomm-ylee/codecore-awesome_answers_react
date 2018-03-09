import React, { Component } from 'react';
import QuestionDetails from './QuestionDetails';
import AnswerList from './AnswerList';
import question1Data from '../question1Data';

class QuestionShowPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      question: question1Data
    }

    this.deleteQuestion = this.deleteQuestion.bind(this)
    this.deleteAnswer = this.deleteAnswer.bind(this)
  }

  deleteQuestion (event) {
    this.setState({
      question: {}
    })
  }

  deleteAnswer (answerId) {
    const { question } = this.state
    const { answers } = question

    this.setState({
      question: {
        ...question,
        answers: answers.filter(answer => answer.id !== answerId)
        }
      })
  }


  render() {
    const { question = {} } = this.state;
    const { answers = [] } = question;

    // To pass props to React elements, set them with
    // "HTML attrbutes" inside JSX. Each attribute will
    // act as a property of the component's `props` object.

    // 1rem is == to the font-size of the root tag (<html> ...).
    if (question.id) {
      return (
        <main
          className="QuestionShowPage"
          style={{
            margin: '0 1rem'
          }}
        >
          <QuestionDetails {...question} />
          <button
            data-id={question.id}
            onClick={this.deleteQuestion}
          >
            Delete
          </button>
          <h3>Answers</h3>
          <AnswerList
            answers={answers}
            onAnswerDeleteClick={this.deleteAnswer}
          />
        </main>
      )
    } else {
      return (
        <main
          className="QuestionShowPage"
          style={{
            margin: '0 1rem'
          }}
        >
          <h2>Question doesn't exist.</h2>
        </main>
      )
    }
  }
}

export default QuestionShowPage;
