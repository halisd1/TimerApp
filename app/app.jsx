var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// Load css
require('appStyles');

ReactDOM.render(
  <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Timer}/>
        <Route path="countdown" component={Countdown}/>
      </Route>
  </Router>,
  document.getElementById('app')
);
