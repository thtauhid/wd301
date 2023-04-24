import React from "react";
import { TaskItem } from "./types";
interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskItem>({
    id: Number(new Date()),
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({
      id: Number(new Date()),
      title: "",
      description: "",
      dueDate: "",
    });
  };

  return (
    <form
      onSubmit={addTask}
      className='border-2 border-stone-600 border-dashed flex flex-col m-2'
    >
      <input
        type='text'
        className='border-2 border-stone-400 rounded p-3 m-2'
        name='title'
        placeholder='Title'
        value={formState.title}
        onChange={handleChange}
        id='todoTitle'
        required
      />
      <input
        type='text'
        className='border-2 border-stone-400 rounded p-3 m-2'
        name='description'
        placeholder='Description'
        value={formState.description}
        onChange={handleChange}
        id='todoDescription'
      />
      <input
        type='date'
        className='border-2 border-stone-400 rounded p-3 m-2'
        name='dueDate'
        placeholder='Due Date'
        value={formState.dueDate}
        onChange={handleChange}
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
};

export default TaskForm;
