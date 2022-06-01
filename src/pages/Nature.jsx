import React from 'react'
import { useGetNatureQuery } from '../services/NatureApi'

const Nature = () => {
  const { data: natureData, isLoading, error, isError } = useGetNatureQuery();

  console.log('Nature', natureData);
  
  
  return (
    <div>Nature</div>
  )
}

export default Nature