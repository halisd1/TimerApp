var React = require('react');
var NavBar = require('NavBar');
var Timer = require('Timer');
var Countdown = require('Countdown');

var Main = (props) => {
    return (
      <div>
          <NavBar/>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            Main.jsx Rendered
            {props.children}
          </div>
        </div>
      </div>
    )
};

module.exports = Main;
