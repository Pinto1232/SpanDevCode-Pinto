import React from 'react'
import { useGetAchitectureQuery } from '../services/ArchitectureApi'

const Architecture = () =>{
  const { data: architectureData, isLoading, error, isError } = useGetAchitectureQuery();

  console.log('Architecture', architectureData);
  

  return (
    <div>Architecture</div>
  )
}

export default Architecture