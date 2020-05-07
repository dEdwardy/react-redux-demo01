import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import Example from './Example'
import store from './store'

const App = (
  <Provider store={store}>
    <TodoList />
    <Example />
  </Provider>
)
ReactDOM.render(
  App,
  document.getElementById('root')
);