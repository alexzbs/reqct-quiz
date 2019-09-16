import React, { Component } from 'react'
import classes from './QuizCreator.module.css'

//comp
import Button from '../../components/UI/Button/Button'

export default class QuizCreator extends Component {

  submitHandler = event => {
    event.preventDefault()
  }
  addQuestionHandler = () => { }

  createQuizHandler = () => { }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Создание теста</h1>
          <form onSubmit={this.submitHandler}>
            <input type="text" />
            <hr />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />

            <select></select>

            <Button
              type="primary"
              onCLick={this.addQuestionHandler}
            >
              Добавить вопрос
          </Button>
            <Button
              type="success"
              onCLick={this.createQuizHandler}
            >
              Создать тест
          </Button>
          </form>
        </div>
      </div>
    )
  }
}