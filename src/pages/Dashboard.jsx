import React from 'react'
import BlogCard from '../components/BlogCard'

const Dashboard = () => {
  return (
    <div className='dashboard-page'>
      <h1 className='dashboard-header'>
        ────&lt; DASHBOARD &gt;────</h1>
        <div className="dashboard-container">
          <BlogCard />
        </div>
        
    </div>
  )
}

export default Dashboard