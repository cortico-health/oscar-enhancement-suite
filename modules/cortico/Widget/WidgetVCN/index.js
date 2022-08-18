import React from 'react'
import Main from './Main'
import Sidebar from './Sidebar'

const Index = () => {
  return (
    <div className="tw-flex tw-h-full">
      <Sidebar />

      <Main />
    </div>
  )
}

export default Index