import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestPackage from 'react-addons-test-utils';
import $ from 'jQuery';

import Timer from 'Timer';

describe('Timer Page', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });
});
