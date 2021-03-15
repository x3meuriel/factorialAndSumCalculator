import React, { Component } from 'react';
import {Navigation} from './components/navigation/navigation';
import {Factorial}  from './components/Factorial/factorial'
import {Insert}  from './components/Insert/insert';
import {Sum}  from './components/Sum/sum';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
     // properties and methods of this.state
      today: new Date(),
      number: 3,
      error: 'numbers are greater than 9999'
    }
  
  }

  factorial  = (num) => { // function for factorial;
    num = parseFloat(num);
    if (num<=0) return 1;
    return num * this.factorial(num-1)
  }
  sumOfAp =  (num) => { // function for sum
    num = parseFloat(num);
    if (num <= 0 ) return 0;
    return num + this.sumOfAp(num-1)
  }
  changeNumber = (event) => { // function for input(number) change
    if((event.target.value === '') || (event.target.value.length >= 5 ) || (event.target.value = null)
     || (isNaN(event.target.value)) ){
      return (
        <h4> numbers should not be greater than 9999</h4>
    )
    }  
    this.setState({number: parseFloat(event.target.value)})
  }
   
  // componentDidMount(){
  //   let jj = document.getElementById('changeInt');
  // }

  componentDidUpdate(){
    let inputHolder = document.getElementById('inputHolder');
    let warning = document.getElementById('show_warning')
   
  
    if(inputHolder.value.length>=4){
        warning.style.visibility = 'visible'
        return warning.innerHTML = `NB: Numbers Shouldn't be greater than 9999`;
    }
    else{
      warning.style.visibility = 'collapse'
    }
  }
 
  render(){
    const {number, today} = this.state;
    
    return (
      <div className="App">
        
        <Navigation date = {today.getFullYear()} />
        <h4 id = 'show_warning' style = {{color: 'red',backgroundColor: 'white',
         padding: '5px', margin: '4px auto', width: '50%', visibility: 'collapse'
         }}> </h4> 
        <Insert changed = {this.changeNumber} />
        <div className = 'container'>
          <div className="row cont">
            <Factorial int={number} factorial={this.factorial(number)} /> 
            <Sum int = {number} numberHandler = {this.sumOfAp(parseFloat(number))} />
          </div>
        </div>
        
      </div>
    );

  }

}

export default App; 