import React from 'react'
import { useGetTreeDRendersQuery } from '../services/TreeDRendersApi'

const TreeDRenders = () => {
  const { data: dRenderData, isLoading, error, isError } = useGetTreeDRendersQuery();
  console.log('3D Renders', dRenderData);
  

  return (
    <div>3D Renders</div>
  )
}

export default TreeDRenders