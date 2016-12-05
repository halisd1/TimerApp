import React from 'react';
import ReactDOM from 'react-dom'

var Controls = React.createClass({
  propTypes:{
    timerState: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function (newStatus){
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },


  render(){
    var {timerState} = this.props;
    var renderStartStopButton = () => {
      if (timerState === 'started'){
        return <button className="button secondary" onClick={this.onStatusChange('paused')}>Pause</button>
      }else if (timerState === 'paused') {
        return <button className="button primary" onClick={this.onStatusChange('started')}>Start</button>
      }
    };

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="hollow alert button" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>

    )
  }
})

module.exports = Controls;
