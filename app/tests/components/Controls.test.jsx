import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestPackage from 'react-addons-test-utils';
import $ from 'jQuery';

import Controls from 'Controls';

describe('Controls Component', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('Render Button', () => {
    it('timerState should start and render pause',() => {
      var controls = TestPackage.renderIntoDocument(<Controls timerState="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
    it('timerState should stop and render start', () => {
      var controls = TestPackage.renderIntoDocument(<Controls timerState="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $startButton = $el.find('button:contains(Start)');

      expect($startButton.length).toBe(1);
    });
  });
});
