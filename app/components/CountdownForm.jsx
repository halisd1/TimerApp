import React from 'react';
import ReactDOM from 'react-dom';

var CountdownForm = React.createClass({
  onSubmit: function(e){
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    if (strSeconds.match(/^[0-9]*$/) && (strSeconds > 0)){
        this.refs.seconds.value = '';
        this.props.onSetCountdown(parseInt(strSeconds*100, 10));
    }
  },

  render(){
    return(
      <div>
        <form className="countdown-form" ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="seconds" placeholder="Enter time in seconds (must be less than 3600)"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;
