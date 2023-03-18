import "./TaskCard.css";

const TaskCard = (props) => {
  console.log(props);

  return (
    <div className='TaskItem '>
      <h2 className='text-xl font-bold'>{props.title}</h2>
      {
        // If the task is completed, show the completed date else show the due date
        props.completedAtDate ? (
          <p>Completed on: {props.completedAtDate}</p>
        ) : (
          <p>Due on: {props.dueDate}</p>
        )
      }
      <p>Assignee: {props.assigneeName}</p>
    </div>
  );
};

export default TaskCard;
