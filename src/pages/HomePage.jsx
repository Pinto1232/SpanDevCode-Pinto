import React from 'react'
import { SContainer, HeadingHome, LogoHome, MenuHome, Content, SHeader, SParagraph } from '../components/Sidebar/style'
import { useGetTopicsQuery, } from '../services/SpanApi'
import { bannerSVG } from './../assets'

const HomePage = () => {
  const { data, isLoading, error, isError } = useGetTopicsQuery(); 

  console.log("Topics", data); 
  

  return (
    <SContainer className="container_back" style={{
      backgroundImage: `url(${bannerSVG}) , linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
       content: ""
    }}>
        <HeadingHome>
                <LogoHome className="menu">Span Digital</LogoHome>
                <MenuHome className="menu">Menu</MenuHome>
        </HeadingHome> 
        
     </SContainer>
  )
}

export default HomePage