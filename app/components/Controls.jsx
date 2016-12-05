import React from 'react';
import ReactDOM from 'react-dom'

var Controls = React.createClass({
  propTypes:{
    timerState: React.PropTypes.string.isRequired
  },

  render(){
    var {timerState} = this.props;
    var renderStartStopButton = () => {
      if (timerState === 'started'){
        return <button className="button hollow secondary">Pause</button>
      }else if (timerState === 'paused') {
        return <button className="button primary">Start</button>
      }
    };

    return(
      <div className="controls">
        {renderStartStopButton()}
        <button className="hollow alert button">Clear</button>
      </div>

    )
  }
})

module.exports = Controls;
