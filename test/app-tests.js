import React from 'react';
import {configure, mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/app';

configure({ adapter: new Adapter() });

describe('test app.js', function () {
    it('should have rendered message', function () {
        const wrapper = shallow(<App />);
        expect(wrapper.find('h1')).not.equal('Hello, Pravin!');
    });
}); 