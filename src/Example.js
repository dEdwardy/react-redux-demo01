import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
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
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
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