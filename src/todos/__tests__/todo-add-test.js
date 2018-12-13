import React from 'react';
import { shallow } from 'enzyme';

import TodoAdd from '../todo-add';

describe('TodoAdd', () => {
  it('should contain what', () => {
    const wrapper = shallow(<TodoAdd />);
    expect(wrapper.find('h2').at(0).text()).toBe('What needs to be done?');
  });

  it('should call changeTodoInput', () => {
    const changeTodoInput = jest.fn();
    const wrapper = shallow(<TodoAdd changeTodoInput={changeTodoInput} />);
    wrapper.find('input').at(0).prop('onChange')();
    expect(changeTodoInput).toBeCalled();
  });

  it('should call addTodo', () => {
    const addTodo = jest.fn();
    const wrapper = shallow(<TodoAdd addToDo={addTodo} />);
    wrapper.find('button').at(0).prop('onClick')();
    expect(addTodo).toBeCalled();
  });
});