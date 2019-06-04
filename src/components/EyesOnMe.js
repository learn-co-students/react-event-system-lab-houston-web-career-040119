// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component {

    render() {
        return(
            <button onFocus={this.goodEvent} onBlur={this.blurEvent}>what a button</button>
        )
    }
    goodEvent = () => {
        console.log('Good!')
    } 

    blurEvent = () => {
        console.log('Hey! Eyes on me!')
    }
}

export default EyesOnMe