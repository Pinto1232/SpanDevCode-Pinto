import React from 'react'
import { SSidebar, SLogo, SSearch, SSearchIcon, SDivider, SLinkContainer, SLink, SLinkIcon, SlinkLabel, SLinkNotification } from '../Sidebar/style'
import { logoSVG } from '../../assets'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaAngleLeft } from 'react-icons/fa';



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
          <SLinkIcon></SLinkIcon>
          <SlinkLabel>Animation</SlinkLabel>
          <SLinkNotification><FaAngleLeft/></SLinkNotification>
        </SLink>
      </SLinkContainer>
    </SSidebar>
  )
}


const linkArray = [
  {
    label: 'Animation',
    icon: <FaAngleLeft />, 
    to: '/'
  },

    {
    label: 'Animation',
    icon: <FaAngleLeft />, 
    to: '/'
  },
    
      {
    label: 'Animation',
    icon: <FaAngleLeft />, 
    to: '/'
  },
      
        {
    label: 'Animation',
    icon: <FaAngleLeft />, 
    to: '/'
  },
        
          {
    label: 'Animation',
    icon: <FaAngleLeft />, 
    to: '/'
  },
          
  {
    label: 'Animation',
    icon: <FaAngleLeft />, 
    to: '/'
  },
            
  {
    label: 'Animation',
    icon: <FaAngleLeft />, 
    to: '/'
  },
              
  {
    label: 'Animation',
    icon: <FaAngleLeft />, 
    to: '/'
  }
];

export default Sidebar