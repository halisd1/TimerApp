var React = require('react');
var NavBar = require('NavBar');
var Timer = require('Timer');
var Countdown = require('Countdown');

var Main = (props) => {
    return (
      <div>
        <div>
          <NavBar/>
          <div>
            <p>Main.jsx Rendered</p>
            {props.children}
          </div>
        </div>
      </div>
    )
};

module.exports = Main;
