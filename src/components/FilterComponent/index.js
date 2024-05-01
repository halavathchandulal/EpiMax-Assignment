// FilterComponent.js
import React, {useState} from 'react'
import './index.css'

function FilterComponent({handleFilterChange}) {
  const [selectedFilter, setSelectedFilter] = useState('All')

  const handleClick = filter => {
    setSelectedFilter(filter)
    handleFilterChange(filter)
  }

  return (
    <div className='buttons'>
      <button
        className={`button-container ${
          selectedFilter === 'All' ? 'selected' : ''
        }`}
        onClick={() => handleClick('All')}
      >
        All
      </button>
      <button
        className={`button-container ${
          selectedFilter === 'Start' ? 'selected' : ''
        }`}
        onClick={() => handleClick('Start')}
      >
        Start
      </button>
      <button
        className={`button-container ${
          selectedFilter === 'Progress' ? 'selected' : ''
        }`}
        onClick={() => handleClick('Progress')}
      >
        Progress
      </button>
      <button
        className={`button-container ${
          selectedFilter === 'Complete' ? 'selected' : ''
        }`}
        onClick={() => handleClick('Complete')}
      >
        Complete
      </button>
    </div>
  )
}

export default FilterComponent
