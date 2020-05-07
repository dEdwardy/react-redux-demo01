import React, { useState, useEffect, createContext, useContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const CountContext = createContext()
function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1
      case 'reduce':
        return state - 1
      default:
        return state
    }
  }, 0)
  return (
    <div>
      <h3>useReducer:</h3>
      <span>{count}</span>
      <button onClick={() => { dispatch('add') }}>+</button>
      <button onClick={() => { dispatch('reduce') }}>-</button>
    </div>
  )
}
function Index() {
  useEffect(() => {
    console.log('index')
    return () => {
      console.log('index gone')
    }
  }, [])
  return (
    <h2>Index Page</h2>
  )
}
function List() {
  useEffect(() => {
    console.log('list')
    return () => {
      console.log('list gone')
    }
  }, [])
  return (
    <h2>List Page</h2>
  )
}
function Counter() {
  let count = useContext(CountContext);
  return (
    <h2>son:{count}</h2>
  )
}
function Example() {
  const [count, setCount] = useState(0);
  //useEffect 代替生命周期钩子 componentDidMount componentDidUpdate...
  useEffect(() => {
    console.log('You clicked' + count + 'times')
    return () => {
      console.log('----------')
    }
  }, [])
  return (
    <div>
      <p>You clicked {count} times</p>

      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <ReducerDemo />
      <Router>
        <ul>
          <li>
            <Link to="/">index</Link>
          </li>
          <li>
            <Link to="/list">list</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list/" component={List} />
      </Router>
    </div>
  );
}


export default Example;