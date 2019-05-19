import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import A from './components/A'
import B from './components/B'
import C from './components/C'
import Home from './components/Home'
function App() {
  return (
    <div className="App">
        <div>HAHA</div>
        <Router>
            <Link to="/">首页面</Link>
            ----
            <Link to="/a/5">A页面</Link>
            ----
            <Link to="/b">B页面</Link>
            ----
            <Link to="/c/666">C页面</Link>
            {/* <Route exact path="/" component={Home}></Route>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route> */}
            <Switch>
              <Route path="/a/:id" component={A}></Route>
              <Route path="/b" component={B}></Route>
              <Route path="/c/:num" component={C}></Route>
              <Route path="/" component={Home}></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
