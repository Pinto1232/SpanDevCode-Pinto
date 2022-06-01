import React from 'react'
import { useGetExperimentalQuery } from '../services/ExperimentalApi'

const Experimental = () => {
  const { data: ExperimentalData, isLoading, error, isError } = useGetExperimentalQuery();

  console.log('Experimental', ExperimentalData);
  
   
  return (
    <div>Experimental</div>
  )
}

export default Experimental