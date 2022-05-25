import React from 'react'
import { SSidebar, SLogo, SSearch, SSearchIcon, SDivider, SLinkContainer, SLink, SLinkIcon, SlinkLabel, SLinkNotification } from '../Sidebar/style'
import { logoSVG } from '../../assets'
import {AiOutlineSearch} from 'react-icons/ai'


const Sidebar = () => {
  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch>
        <SSearchIcon> 
          <AiOutlineSearch />
        </SSearchIcon>
         <input placeholder="Search" />
      </SSearch>
      {/* <SDivider /> */}

      <SLinkContainer>
        <SLink>
          <SLinkIcon>Hi</SLinkIcon>
          <SlinkLabel>Home</SlinkLabel>
          <SLinkNotification>5</SLinkNotification>
        </SLink>
      </SLinkContainer>


      <SLinkContainer>
        <SLink>
          <SLinkIcon>Hi</SLinkIcon>
          <SlinkLabel>Home</SlinkLabel>
          <SLinkNotification>5</SLinkNotification>
        </SLink>
      </SLinkContainer>
    </SSidebar>
  )
}

export default Sidebar