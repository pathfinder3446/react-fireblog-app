import React from 'react'
import BlogCard from '../components/BlogCard'

const Dashboard = () => {
  return (
    <div>
      <h1 className='dashboard-header'>
        ──── DASHBOARD ────</h1>
        <div className="dashboard-container">
          <BlogCard />
        </div>
        
    </div>
  )
}

export default Dashboard