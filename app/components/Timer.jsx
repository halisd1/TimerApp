import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

var Timer = React.createClass({
  getInitialState: function(){
    return{
    count: 0,
    timerState: 'stopped'
  }
},

  onClickClock: function(){
    this.setState({
      timerState: 'started'
    });
    this.timerCount();
    console.log(this.state + ": Timer should start!");
  },

  onClickPaused: function(){
    this.setState({
      timerState: 'stopped',
    });
    clearInterval(this.timer);
  console.log(this.state + ": Timer should stop!");
  },

  onClickStopped: function(){
    this.setState({
      timerState: 'stopped',
      count: 0,
    });
    clearInterval(this.timer);
    this.timer = undefined;
  console.log(this.state + ": Timer should stop!");
  },

  timerCount: function (){
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 10);
    console.log(this.state.count);
  },

  componentDidUpdate: function(){
    console.log('componentDidUpdate');
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
    console.log("Timer Cleared")
  },

  render(){
    var {count, timerState} = this.state;
    var displayBars = () => {
      if (timerState === 'started'){
      return (<button className="hollow secondary button" onClick={this.onClickPaused}>Pause</button>)
    }
    else if (timerState === 'stopped'){
      return (<button className="primary button" onClick={this.onClickClock}>Start</button>)
    }s
    };

    return(
      <div className="timer-style">
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        {displayBars()}
        <button className="hollow alert button" onClick={this.onClickStopped}>Stop</button>
      </div>
    );
  }
});

module.exports = Timer;
