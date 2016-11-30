import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestPackage from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock', () => {
  it('should exist', ()=> {
    expect(Clock).toExist();
  });
  describe('Format Seconds', () => {
    it('should format seconds', ()=>{
      var clock = TestPackage.renderIntoDocument(<Clock/>);
      var seconds = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
    it('should format seconds when min/sec are less than 10', ()=>{
      var clock = TestPackage.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(seconds);
      expect(actual).toBe(expected);
    });
  });
});
