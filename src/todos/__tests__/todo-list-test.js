import React from 'react';
import renderer from 'react-test-renderer';

import TodoList from '../todo-list/';

describe('TodoList', () => {
  it('should render todos', () => {
    const component = renderer.create(<TodoList todos={[{id: 1, label: 'a'}, {id: 2, label: 'b'}]}/>);
    expect(component).toMatchSnapshot();
  });
});