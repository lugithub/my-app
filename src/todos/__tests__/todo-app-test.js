import React from 'react';
import { mount } from 'enzyme';

import TodoApp from '../todo-app';

describe('TodoApp', () => {
  it('should setState with todoinput', () => {
    const wrapper = mount(<TodoApp />);

    expect.assertions(1);

    return wrapper.find('input').at(0).prop('onChange')({
      target: {
        value: 'a'
    }}).then(() => {
      expect(wrapper.instance().state).toEqual({
        todos:[],
        todoInput: 'a',
      });
    });
  });

  it('should add todo', () => {
    const wrapper = mount(<TodoApp />);
    wrapper.find('input').at(0).prop('onChange')({
      target: {
        value: 'a'
    }});

    expect.assertions(1);

    return wrapper.find('button').at(0).prop('onClick')().then(() => {
      expect(wrapper.instance().state).toEqual({
        todos:[{id: 1, label: 'a'}],
        todoInput: '',
      });
    });
  });  
});