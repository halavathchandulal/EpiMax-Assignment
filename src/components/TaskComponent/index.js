import React from 'react'
import './index.css'

function TaskComponent({
  task,
  handleStatusUpdate,
  handleTaskDelete,
  handleTaskEdit,
}) {
  const getStatusColor = status => {
    switch (status) {
      case 'Progress':
        return 'progress-color'
      case 'Complete':
        return 'complete-color'
      case 'Start':
        return 'start-color'
      default:
        return ''
    }
  }

  return (
    <div key={task.id} className='task'>
      <h3>{task.title}</h3>
      <p>Assigned to: {task.assignedTo}</p>
      <p className={`status ${getStatusColor(task.status)}`}> {task.status}</p>
      <div className='status-buttons'>
        {task.status === 'Start' && (
          <button
            className={`button-section-adding `}
            onClick={() => handleStatusUpdate(task.id, 'Progress')}
          >
            Start
          </button>
        )}
        {task.status !== 'Complete' && (
          <button
            className={`button-section-adding`}
            onClick={() => handleStatusUpdate(task.id, 'Complete')}
          >
            Complete
          </button>
        )}
        <button
          className='button-section-adding'
          onClick={() => handleTaskEdit(task.id)}
        >
          Edit
        </button>
        {task.status === 'Complete' && (
          <button
            className='button-section-adding'
            onClick={() => handleTaskDelete(task.id)}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  )
}

export default TaskComponent
