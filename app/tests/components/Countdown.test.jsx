import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestPackage from 'react-addons-test-utils';
import $ from 'jQuery';

import Countdown from 'Countdown';

describe('Countdown Component', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set State to started and countdown', (done) => {
      var countdown = TestPackage.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.timerState).toBe('started');

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should not become a negative value after a while', (done) => {
      var countdown = TestPackage.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
      expect(countdown.state.count).toBe(0);
      done();
    }, 3001)
    });
  });
});
