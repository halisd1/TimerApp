var React = require('react');
var Clock = require('Clock');
var CountdownForm = require ('CountdownForm');
var Controls = require('Controls');

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

  startTimer: function (){
      this.timer = setInterval(() => {
        var newCount = this.state.count - 1;
        this.setState({
          count: newCount >= 0 ? newCount : 0
        });
      }, 1000);
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
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
