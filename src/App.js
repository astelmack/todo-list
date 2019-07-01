import React from "react";
import { Router, Route } from "react-router-dom";
import History from "./History";
import Header from "./components/Header";
import ToDoList from "./components/todo/ToDoList";

function App() {
  return (
    <div>
      <Router history={History}>
        <div>
          <Header />
          <Route path="/" exact component={ToDoList} />
        </div>
      </Router>
    </div>
  );
}

export default App;
