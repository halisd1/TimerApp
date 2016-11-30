var React = require('react');
var {Link, IndexLink} = require('react-router');

var NavBar = (props) => {
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text" activeClass="active">React Timer App</li>
            <li>
              <IndexLink href="/#" activeClassName="active-link">Timer App</IndexLink>
            </li>
            <li>
              <IndexLink href="/#" activeClassName="active-link">Countdown App</IndexLink>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                 Author: <a href="http://www.facebook.com/spiky" target="_blank">Harris</a>
              </li>
            </ul>
        </div>
      </div>
)
};

module.exports = NavBar;
