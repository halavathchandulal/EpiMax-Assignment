// TaskListComponent.js
import React from 'react'
import TaskComponent from '../TaskComponent'

function TaskListComponent({tasks, handleStatusUpdate}) {
  return (
    <div className='task-list'>
      {tasks.map(task => (
        <TaskComponent
          key={task.id}
          task={task}
          handleStatusUpdate={handleStatusUpdate}
        />
      ))}
    </div>
  )
}

export default TaskListComponent
