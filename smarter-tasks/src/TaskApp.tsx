import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}
class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
  constructor(props: TaskAppProp) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  addTask = (task: TaskItem) => {
    this.setState((state, props) => {
      return {
        tasks: [...state.tasks, task],
      };
    });
  };

  render() {
    return (
      <div className='Main mt-5'>
        <h1 className='text-4xl font-bold text-stone-700'>Smarter Tasks</h1>
        <p className='text-stone-800 mt-4'>
          <b>Project:</b> Graduation Final Year Project (Revamp College Website)
        </p>
        <div className='flex flex-row justify-around mt-5'>
          <div className='basis-1/2 flex flex-col border-2 border-stone-400 rounded p-5 mr-5'>
            <h1 className='font-bold text-2xl pb-3 text-center text-stone-500'>
              Pending
            </h1>
            <TaskForm addTask={this.addTask} />
            <TaskList tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskApp;
