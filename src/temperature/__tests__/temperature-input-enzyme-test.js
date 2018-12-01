import React from 'react';
import { shallow, mount, render } from 'enzyme';

import { TemperatureInput } from '../temperature-input';

describe('TemperatureInput', () => {
  let x = 0;
  const value = 100;
  let handler = null;

  beforeEach(() => {
    handler = jest.fn(v => x = v);
  });

  describe('shallow', () => {
    it('types', () => {
      const tree = shallow(<TemperatureInput temperature={1010} handleChange={handler}/>);
  
      expect(tree.find('input').length).toEqual(1);
    });

    it('bar', () => {
      const tree = shallow(<TemperatureInput temperature={1010} handleChange={handler}/>);
  
      expect(tree.find('Bar').length).toBe(0);
    });

    it('handle onChange', () => {
      const wrapper = shallow(<TemperatureInput temperature={1010} handleChange={handler}/>);  
      wrapper.find('input').simulate('change', {target: {value}});

      expect(x).toEqual({target: {value}});
    });    
  });

  describe('mount', () => {
    it('types', () => {
      const tree = mount(<TemperatureInput temperature={1010} handleChange={handler}/>);
  
      expect(tree.find('input').length).toEqual(1);
    });

    it('bar', () => {
      const tree = mount(<TemperatureInput temperature={1010} handleChange={handler}/>);
  
      expect(tree.find('Bar').length).toBe(1);
    });

    it('handle onChange', () => {
      const wrapper = shallow(<TemperatureInput temperature={1010} handleChange={handler}/>);  
      wrapper.find('input').simulate('change', {target: {value}});

      expect(x).toEqual({target: {value}});
    });    
  });

  describe('render', () => {
    it('types', () => {
      const wrapper = render(<TemperatureInput temperature={1010} handleChange={jest.fn()}/>);
  
      expect(wrapper[0].name).toEqual('fieldset');
      expect(wrapper.find('legend').length).toEqual(1);
    });

    // simulate is not a function.

    // it('handle onChange', () => {
    //   const wrapper = render(<TemperatureInput temperature={1010} handleChange={handler}/>);  
    //   wrapper.find('input').simulate('change', {target: {value}});

    //   expect(x).toEqual({target: {value}});
    // });
  });
});
