import React from 'react';

var Clock = React.createClass({
  getDefaultProps: function(){
    return {
    totalSeconds: 0
    };
  },

  propTypes: {
    totalSeconds: React.PropTypes.number
  },

  formatSeconds: function (totalSeconds){
    var milliseconds = totalSeconds%100;
    var seconds = Math.floor(totalSeconds/100%60);
    var minutes = Math.floor(totalSeconds/6000);
    // var minutes = Math.floor(totalSeconds/60);
    // var seconds = totalSeconds%60;
    // var hours = Math.floor(totalSeconds/3600)

    if (milliseconds < 10){
      milliseconds = '0' + milliseconds;
    }

    if (seconds < 10){
      seconds = '0' + seconds;
    }

    if (minutes < 10){
      minutes = '0' + minutes;
    }

    return minutes + ':' + seconds + ':' + milliseconds;
  },
  render: function(){
    var {totalSeconds} = this.props;

    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
});

module.exports = Clock;
