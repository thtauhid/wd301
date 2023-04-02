import React from "react";
import TaskCard from "./TaskCard";

function App() {
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
          <button className='flex bg-stone-400 p-3 m-2 text-stone-900 text-xl font-bold items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-6 mr-2'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
            New Task
          </button>
        </div>
        <div className='basis-1/2 flex flex-col border-2 border-stone-400 rounded p-5 ml-5'>
          <h1 className='font-bold text-2xl pb-3 text-center text-stone-500'>
            Done
          </h1>
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
