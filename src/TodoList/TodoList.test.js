import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoList todos={[
        {
          "id": 1,
          "name": "Code",
          "checked": false
        },
        {
          "name": "Read",
          "checked": false,
          "id": 2
        },
        {
          "name": "Brush teeth",
          "checked": false,
          "id": 3
        },
        {
          "name": "Something",
          "checked": false,
          "id": 4
        }
      ]}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<TodoList todos={[
            {
              "id": 1,
              "name": "Code",
              "checked": false
            },
            {
              "name": "Read",
              "checked": false,
              "id": 2
            },
            {
              "name": "Brush teeth",
              "checked": false,
              "id": 3
            },
            {
              "name": "Something",
              "checked": false,
              "id": 4
            }
          ]}/>)
        .toJSON();
    expect(tree).toMatchSnapshot();  
});