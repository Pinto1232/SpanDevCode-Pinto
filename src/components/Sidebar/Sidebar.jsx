import React from 'react'
import { SSidebar, SLogo, SSearch, SSearchIcon, SDivider, SLinkContainer, SLink, SLinkIcon, SlinkLabel, SLinkNotification } from '../Sidebar/style'
import { logoSVG } from '../../assets'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaPlay, FaKeybase, FaGitter,FaLaughSquint, FaSwatchbook,FaSatellite, FaVrCardboard, FaAngleLeft } from 'react-icons/fa';



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
      {linkArray.map(({label, icon, notification, to}) => (
      <SLinkContainer key={label}>
        <SLink to={to}>
            <SLinkNotification>{ notification}</SLinkNotification>
            <SlinkLabel>{ label}</SlinkLabel>
            <SLinkIcon>{icon}</SLinkIcon>
        </SLink>
      </SLinkContainer>
      ))}
    </SSidebar>
  )
}


const linkArray = [
  {
    label: 'Animation',
    icon: <FaPlay />, 
    to: '/animation',
    notification: 0,
  },

    {
    label: 'Cartooning',
    icon: <FaKeybase />, 
    to: '/cartooning',
    notification: 2,
  },
    
      {
    label: 'Character Design',
    icon: <FaGitter />, 
    to: '/chardesing',
    notification: 4,
  },
      
        {
    label: 'Comedy',
    icon: <FaLaughSquint />, 
    to: '/comedy',
    notification: 2,
  },
        
  {
    label: 'Design',
    icon: <FaSwatchbook />, 
    to: '/desing',
    notification: 23,
  },
          
  {
    label: 'DJing',
    icon: <FaAngleLeft />, 
    to: '/djing',
    notification: 0,
  },
            
  {
    label: 'Engineering',
    icon: <FaSatellite />, 
    to: '/engineering',
    notification: 10,
  },
              
  {
    label: 'Game Design',
    icon: <FaVrCardboard />, 
    to: '/gamedesign',
    notification: 0,
  }
];

export default Sidebar