import React from 'react'
import { useGetTexturePatternsQuery } from '../services/TexturesPatternsApi'

const TexturesPatterns = () =>{
  const { data: texturePatternsData, isLoading, error, isError } = useGetTexturePatternsQuery();
  console.log('Textures Patterns', texturePatternsData);
  
  
  return (
    <div>Textures & Patterns</div>
  )
}

export default TexturesPatterns