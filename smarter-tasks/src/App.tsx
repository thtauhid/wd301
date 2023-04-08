import React from "react";
import "./App.css";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

function App() {
  return (
    <div className='App'>
      <TaskForm />
      <TaskList tasks={[]} />
    </div>
  );
}

export default App;
