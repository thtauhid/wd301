import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTaskCB: (id: number) => void;
}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task, idx) => (
    <li key={idx}>
      <Task
        id={task.id}
        title={task.title}
        description={task.description}
        dueDate={task.dueDate}
        deleteTaskCB={props.deleteTaskCB}
      />
    </li>
  ));
  return <ul>{list}</ul>;
};

export default TaskList;
