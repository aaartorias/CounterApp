import React, {Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component {

    constructor() {
        super();  // to use `this`, we need to call super()
        this.state = {
            counter : 0
        }
        // bind method with class to make `this` available inside the method
        // this.increment = this.increment.bind(this); // we don't need to bind arrow functions
    }

    render() {
         // Call method of parent class from child class
        // pass 'method increment()' as a property to child class 
        // so that we can invoke increment() from ComponentButton(child class)
        // {moving the state up} 
        return (
            <div className="App">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={20} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={25} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <CounterButton by={50} incrementMethod={this.increment} decrementMethod={this.decrement}/>
                <span className="count"> {this.state.counter} </span>
                <div>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
            </div>
      );
    }

    decrement = (by) => {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        )
    }

    increment = (by) => {
        console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
                return {counter: prevState.counter + by}
            }
        );    
    }

    reset = () => {
        this.setState({counter: 0});
    }

}


class CounterButton extends Component {

    render = () => {
        return(
        <div className="counter">
            <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
            <button onClick={() => this.props.decrementMethod(this.props.by)} >-{this.props.by}</button>
        </div>
        )
    }
}

// declaring default props for Counter
CounterButton.defaultProps = {
    by: 1
};

// type checking
// throws warning if invalid type is passed
CounterButton.propTypes = {
    by: PropTypes.number,
};


export default Counter;