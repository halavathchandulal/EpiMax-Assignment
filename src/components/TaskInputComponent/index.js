import React from 'react'
import './index.css'

function TaskInputComponent({
  newTask,
  setNewTask,
  handleTaskAddition,
  handleTaskSave,
}) {
  return (
    <div className='task-input'>
      <input
        type='text'
        className='todo-user-input'
        placeholder='Enter task...'
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button className='button-input' onClick={handleTaskAddition}>
        Add
      </button>
      <button className='button-input' onClick={handleTaskSave}>
        Save
      </button>
    </div>
  )
}

export default TaskInputComponent
