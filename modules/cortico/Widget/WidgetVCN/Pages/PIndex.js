import React from 'react'
import CMessageList from '../Organisms/CMessageList'
import Sidebar from '../Sidebar'

const PIndex = () => {
  return (
    <div className="tw-flex tw-h-full">
      <Sidebar />

      <CMessageList />
    </div>
  )
}

export default PIndex