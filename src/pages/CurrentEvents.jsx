import React from 'react'
import { useGetCurrentEventsQuery } from '../services/CurrentEventsApi'

const CurrentEvents = () => {
  const { data: currentEventsData, isLoading, error, isError } = useGetCurrentEventsQuery();

  console.log('Current Events', currentEventsData);
  
  
  return (
    <>
     <h2>Current Events</h2>
    </>
  )
}

export default CurrentEvents