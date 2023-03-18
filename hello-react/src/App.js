import TaskCard from "./TaskCard";

function App() {
  return (
    <div className='Main mt-5'>
      <h1 className='text-4xl font-bold text-stone-700'>Smarter Tasks</h1>
      <p className='text-stone-800 mt-4'>
        <b>Project:</b> Graduation Final Year Project (Revamp College Website)
      </p>
      <div className='flex flex-row justify-around mt-5'>
        <div className='basis-1/2 flex flex-col border-2 border-stone-300 rounded p-5 mr-5'>
          <h1 className='font-bold text-2xl pb-3'>Pending</h1>
          <TaskCard
            title='Build the website with static content'
            dueDate='10th April'
            assigneeName='Rohit S'
          />
          <TaskCard
            title='Add a blog'
            dueDate='22nd March'
            assigneeName='Rohit M'
          />
        </div>
        <div className='basis-1/2 flex flex-col border-2 border-stone-300 rounded p-5 ml-5'>
          <h1 className='font-bold text-2xl py-3'>Done</h1>
          <TaskCard
            title='Design a mockup'
            completedAtDate='10th April'
            assigneeName='Rohit M'
          />
          <TaskCard
            title='Get the approval from principal'
            completedAtDate='20th April'
            assigneeName='Ajay S'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
