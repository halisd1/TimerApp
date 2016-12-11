import React from 'react';
import Clock from 'Clock';
import CountdownForm from 'CountdownForm';
import Controls from 'Controls';

var Countdown = React.createClass({
  getInitialState: function (){
    return {
    count: 0,
    timerState: 'stopped'
    }
  },

  componentDidUpdate: function(prevProps, prevState){
      if (this.state.timerState !== prevState.timerState){
        switch (this.state.timerState){
            case 'started':
              this.startTimer();
              break;
            case 'stopped':
              this.setState({count: 0});
            case 'paused':
              clearInterval(this.timer)
              this.timer = undefined;
              break;
        }
      }
    },

    componentDidMount: function(){
      console.log('componentDidMount');
    },

    componentWillUnmount: function(){
      console.log('Interval Cleared');
      clearInterval(this.timer);
      this.timer = undefined;
    },

  startTimer: function (){
      this.timer = setInterval(() => {
        var newCount = this.state.count - 1;
        this.setState({
          count: newCount >= 0 ? newCount : 0
        });
        if (newCount === 0 ){
          this.setState({timerState: 'stopped'});
        }
      }, 10);
    },

  handleSetCountdown: function (seconds){
    this.setState({
      count: seconds,
      timerState: 'started'
    });
  },

  handleStatusChange: function (newStatus){
    this.setState({timerState: newStatus});
  },

  render: function (){
    var {count, timerState} = this.state;
    var renderControlArea = () => {
      if (timerState !== 'stopped'){
        return (<Controls timerState={timerState} onStatusChange={this.handleStatusChange}/>);
      } else {
        return (<CountdownForm onSetCountdown={this.handleSetCountdown}/>);
      }
    };

    return(
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
