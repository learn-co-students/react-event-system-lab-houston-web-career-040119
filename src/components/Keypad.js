// Code Keypad Component Here


import React from 'react';

export default class Keypad extends React.Component{
 onKeyUp =() => {
//  if(e.Keypad ===1){
     console.log('Entering password...')
 }


    render() {
        return (
            <input type="password" onKeyUp={this.onKeyUp}/>
        )
    }
}

