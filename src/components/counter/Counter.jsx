import React, {Component} from 'react'
import './Counter.css'
import PropTypes from 'prop-types'
class Counter extends Component {

    constructor() {
        
        super();  // to use this, we need to call super()
        this.state = {
            counter: 0
        }
        // bind method with class to make `this` available inside the method
        // this.increment = this.increment.bind(this); // we don't need to bind arrow functions
    }

    render = () => {
        return(
        <div className="counter">
            <button onClick={this.increment} >+{this.props.by}</button>
            <span className="count"> {this.state.counter} </span>
        </div>
        )
    }

    increment = () => {

        this.setState({
            counter: this.state.counter + this.props.by ,
        
        });        
        /*
        if (this.state.counter >= 10) {
            this.setState(
                {
                    counter : 0
                }
                )
        } else {
            this.setState(
                {
                    counter : this.state.counter + 1
                }
            )
        }*/
    }
}

/*class Increment extends Component {
    render() {
        console.log('increment');
    }
}*/

// declaring default props for Counter
Counter.defaultProps = {
    by: 1
};

// type checking
// throws warning if invalid type is passed
Counter.propTypes = {
    by: PropTypes.number,
};


export default Counter;