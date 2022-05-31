import React from 'react'
import { SContainer, HeadingHome, LogoHome, MenuHome, SMainSection, SSection, SHeader, SParagraph, SButton } from '../components/Sidebar/style'
import { useGetTopicsQuery, } from '../services/SpanApi'
import { bannerSVG,  logoSVG} from './../assets'

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
                <LogoHome className="menu"> <img src={logoSVG} alt="Span Digital" /></LogoHome>
                <MenuHome className="menu">Menu</MenuHome>
      </HeadingHome> 
      
      <SMainSection>
        <SSection>
          <SHeader>See what's next.</SHeader>
          <SParagraph>Watch Anywhere. Cancel Anytime</SParagraph>
          <SButton>Join Free For a Month</SButton>
        </SSection>
        <SSection></SSection>
      </SMainSection>
        
     </SContainer>
  )
}

export default HomePage