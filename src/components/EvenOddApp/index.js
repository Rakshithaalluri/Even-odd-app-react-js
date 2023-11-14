import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const RandomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + RandomNumber}))
  }

  render() {
    const {count} = this.state
    const isEvenOdd = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="card">
        <div className="container">
          <h1 className="counting"> Count {count} </h1>
          <p className="even-odd"> Count is {isEvenOdd} </p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="text"> *Increase By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
