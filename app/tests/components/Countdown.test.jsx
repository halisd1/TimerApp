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
  /*
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
*/

    it('should not become a negative value after a while', (done) => {
      var countdown = TestPackage.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
      expect(countdown.state.count).toBe(0);
      done();
    }, 3001)
    });

    it('should pause countdown on paused status', (done) => {
      var countdown = TestPackage.renderIntoDocument(<Countdown/>)
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

    setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.timerState).toBe('paused');
        done();
      }, 1001);
    });

    it('stopped countdown on paused status', (done) => {
      var countdown = TestPackage.renderIntoDocument(<Countdown/>)
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

    setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.timerState).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
