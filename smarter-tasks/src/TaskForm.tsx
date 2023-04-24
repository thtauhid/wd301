import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };

  // titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   console.log(`${event.target.value}`);
  //   this.setState({ ...this.state, title: event.target.value });
  // };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form
        onSubmit={this.addTask}
        className='border-2 border-stone-600 border-dashed flex flex-col m-2'
      >
        <input
          type='text'
          className='border-2 border-stone-400 rounded p-3 m-2'
          name='title'
          placeholder='Title'
          value={this.state.title}
          onChange={this.handleChange}
          id='todoTitle'
          required
        />
        <input
          type='text'
          className='border-2 border-stone-400 rounded p-3 m-2'
          name='description'
          placeholder='Description'
          value={this.state.description}
          onChange={this.handleChange}
          id='todoDescription'
        />
        <input
          type='date'
          className='border-2 border-stone-400 rounded p-3 m-2'
          name='dueDate'
          placeholder='Due Date'
          value={this.state.dueDate}
          onChange={this.handleChange}
          id='todoDueDate'
          required
        />
        <button
          type='submit'
          className='border-2 border-stone-400 rounded p-3 m-2 hover:bg-stone-500'
          id='addTaskButton'
        >
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;
