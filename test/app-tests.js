import React from 'react';
import {configure, shallow } from 'enzyme';
import {expect} from 'chai';
import Adapter from 'enzyme-adapter-react-16';

import App from '../src/app';

configure({ adapter: new Adapter() });

describe('test app.js', function () {
    it('should have rendered message', function () {
        const wrapper = shallow(<App />);
        return Promise.all([
            expect(wrapper.find('h1')).to.have.length(1),
            expect(wrapper.find('h1').text()).to.equal('Hello, Pravin!')
        ]);
    });
}); 