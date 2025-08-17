import React from 'react'
import { useParams } from 'react-router-dom'

const user = () => {
    const {username} = useParams();
  return (
    <div>
       <p>User:{username}</p>
    </div>
  )
}

export default user
