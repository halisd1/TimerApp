import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestPackage from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });
  describe('should render', () => {
    it('should render clock to output', () => {
      var clock = TestPackage.renderIntoDocument(<Clock totalSeconds={62*100}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:02:00');
    });
  });

  describe('Format Seconds', () => {
    it('should format seconds', () =>{
      var clock = TestPackage.renderIntoDocument(<Clock/>);
      var seconds = 615*100;
      var expected = '10:15:00';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('should format seconds when min/sec are less than 10', ()=>{
      var clock = TestPackage.renderIntoDocument(<Clock/>);
      var seconds = 61*100;
      var expected = '01:01:00';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});
