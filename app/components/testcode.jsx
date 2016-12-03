import React from 'react';
import ReactDOM from 'react-dom';

var Test = React.createClass({
  getInitialState: function(){
    return{
      value: 30
    };
  },

  onSubmit: function (e){
    e.preventDefault();
    var value=this.refs.value.value;
    console.log(value);

    // if (value.match(/^[0-9]*$/)){
      this.refs.value.value = '';
      console.log(this.state);
      this.setState({
         value: value
       });
    // }
  },

  addition: function(value){
    return value * value;
  },

  render(){
    var {value} = this.state;

    return(
      <div>
        The squared value of {value} equals to {this.addition(value)}.
      <form className="text" ref="form" onSubmit={this.onSubmit}>
        <div><input placeholder="Enter Number" ref="value"></input></div>
        <div><button className="hollow button">Enter value</button></div>
      </form>
      </div>
    );
  }
});

module.exports = Test;
