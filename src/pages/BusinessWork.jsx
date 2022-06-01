import React from 'react'
import {useGetBusinessWorkQuery} from '../services/BusinessWorkApi'

const BusinessWork = () =>{
  const { data: businessData, isLoading, error, isError } = useGetBusinessWorkQuery();

  console.log('Business Work', businessData);
  

  return (
    <div>Business & Work</div>
  )
}

export default BusinessWork