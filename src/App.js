// App.js
import React, {useState} from 'react'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FilterComponent from './components/FilterComponent'
import TaskListComponent from './components/TaskListComponent'
import TaskInputComponent from './components/TaskInputComponent'

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, title: 'HTML', assignedTo: '', status: 'Start'},
    {id: 2, title: 'Javascript', assignedTo: '', status: 'Complete'},
    {id: 3, title: 'React', assignedTo: '', status: 'Progress'},
  ])
  const [filter, setFilter] = useState('All')
  const [newTask, setNewTask] = useState('')

  const handleFilterChange = filter => {
    setFilter(filter)
  }

  const handleStatusUpdate = (taskId, newStatus) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? {...task, status: newStatus} : task,
    )
    setTasks(updatedTasks)
  }

  const handleTaskAddition = () => {
    if (newTask.trim() !== '') {
      const newTaskObject = {
        id: tasks.length + 1,
        title: newTask,
        assignedTo: '',
        status: 'Start', // Set the initial status as 'Start' for all new tasks
      }
      setTasks([...tasks, newTaskObject])
      setNewTask('')
    }
  }

  const handleTaskDelete = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
  }

  const handleTaskEdit = taskId => {
    // You can implement editing functionality here
    console.log('Editing task with ID:', taskId)
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true
    return task.status === filter
  })

  return (
    <div className='App'>
      <div className='header-main-bg-container'>
        <HeaderComponent />
        <FilterComponent handleFilterChange={handleFilterChange} />
      </div>
      <div className='main-bg-container-todos'>
        <TaskInputComponent
          newTask={newTask}
          setNewTask={setNewTask}
          handleTaskAddition={handleTaskAddition}
        />
        <div>
          <TaskListComponent
            tasks={filteredTasks}
            handleStatusUpdate={handleStatusUpdate}
            handleTaskDelete={handleTaskDelete}
            handleTaskEdit={handleTaskEdit} // Ensure this line is present
          />
        </div>
      </div>
    </div>
  )
}

export default App
