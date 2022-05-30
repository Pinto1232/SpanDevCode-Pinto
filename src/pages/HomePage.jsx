import React from 'react'
import { SContainer, HeadingHome, LogoHome, MenuHome, Content, SHeader, SParagraph } from '../components/Sidebar/style'
import { useGetPhotosQuery } from '../services/SpanApi'


const HomePage = () => {
  const { data, isFetching } = useGetPhotosQuery();

  console.log(data);
  

  return (
     <SContainer  className="container_back">
            <HeadingHome>
                <LogoHome>
                  Span
                </LogoHome>
                <MenuHome>Menu</MenuHome>
        </HeadingHome> 
        <Content>
           <SHeader>Welcome to our portal</SHeader>
          <SParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus rem labore voluptatum!</SParagraph>
        </Content>
     </SContainer>
  )
}

export default HomePage