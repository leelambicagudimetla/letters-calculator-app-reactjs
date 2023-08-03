// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  countTheNumber = () => {
    this.setState(prevState => {
      console.log(`${prevState.count}`)
      return {
        count: prevState.count + 1,
      }
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-div">
        <div>
          <h1 className="heading-calculator">
            Calculate the Letters you enter
          </h1>
          <label className="paragraph" htmlFor="enter">
            Enter the phrase
          </label>
          <input
            type="text"
            id="enter"
            value="Enter the phrases"
            placeholder="Enter the phrases"
            className="phrases-class"
            onChange={this.countTheNumber}
          />
          <p className="button-count">No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
