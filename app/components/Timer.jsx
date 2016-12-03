var React = require('react');
var Clock = require('Clock');
var Test = require('Test');

var Timer = React.createClass({
  render: function (){
    return(
      <div>
        <Clock/>
        <Test/>
      </div>
    );
  }
});

module.exports = Timer;
