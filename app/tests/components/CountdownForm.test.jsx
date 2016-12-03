import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestPackage from 'react-addons-test-utils';
import $ from 'jQuery';

import CountdownForm from 'CountdownForm';

describe('CountdownForm', () => {
  it('should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountdown', () => {
    var spy = expect.createSpy();
    var countdownForm = TestPackage.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = '109';
    TestPackage.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  })

  it('should not call onSetCountdown', () => {
    var spy = expect.createSpy();
    var countdownForm = TestPackage.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>)
    var $el = $(ReactDOM.findDOMNode(countdownForm));

    countdownForm.refs.seconds.value = 'number';
    TestPackage.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
