import React from 'react'
import { useGetWallpapersQuery } from '../services/WallpapersApi'


const Wallpapers = () => {
  const { data: WallPaperData, isLoading, error, isError } = useGetWallpapersQuery()
  
  console.log('Wallpapers', WallPaperData);
  
 
  return (
    <div>Wallpapers</div>
  )
}

export default Wallpapers