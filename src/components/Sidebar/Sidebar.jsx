import React,  {useContext, useState} from 'react'
import
  {
    SSidebar,
    SLogo,
    SSearch,
    SSearchIcon,
    SDivider,
    SLinkContainer,
    SLink,
    SLinkIcon,
    SlinkLabel,
    SLinkNotification,
    SLogOut,
    STheme,
    STemeLabel,
    SThemeToggler,
    SToggleThumbnail,
    SSidebarButton,
  } from '../Sidebar/style'
import { logoSVG } from '../../assets'

import
  {
    FaPlay,
    FaKeybase,
    FaGitter,
    FaLaughSquint,
    FaSwatchbook,
    FaSatellite,
    FaVrCardboard,
    FaTv,
    FaCogs,
    FaPowerOff,
    FaSearch,
    FaChevronCircleLeft,
    FaHouseUser,
  } from 'react-icons/fa';
import { ThemeContext} from './../../App'



const Sidebar = () =>{
  const { theme, setTheme } = useContext(ThemeContext)
  const {sidebarOpen, setSidebarOpen} = useState(false)

  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>

     
      <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p )}>
           <FaChevronCircleLeft />
      </SSidebarButton>
      
      
      {/** Dark mode feature */}
      <STheme>
        <STemeLabel></STemeLabel>
        <SThemeToggler isActive={theme === 'dark'} onClick={() => setTheme((p) => (p  === 'light' ? 'dark' : 'light'))}>
          <SToggleThumbnail  style={theme === 'dark' ? {right: "1px"} : {} }/>
        </SThemeToggler>
      </STheme>

      <SSearch>
        <SSearchIcon> 
          <FaSearch />
        </SSearchIcon>
         <input placeholder="Search" />
      </SSearch>


      {/* <SDivider /> */}
      
      {linkArray.map(({label, icon, notification, to}) => (
      <SLinkContainer key={label}>
          <SLink to={to}>
            {!!notification && (
              <SLinkNotification>{ notification}</SLinkNotification>
            )}
             <SLinkIcon>{icon}</SLinkIcon>
            <SlinkLabel>{label}</SlinkLabel>
        </SLink>
        </SLinkContainer>
      ))}

      <SDivider /> 
      {linkArray2.map(({label, icon, to}) => (
        <SLogOut key={label}>
          <SLink to={to}>
            <SLinkIcon>{icon}</SLinkIcon>
            <SlinkLabel>{label}</SlinkLabel>
          </SLink>
        </SLogOut>
      ))}
    </SSidebar>
  )
}


const linkArray = [
    {
    label: 'Home',
    icon: <FaHouseUser />, 
    to: '/',
  },


  {
    label: 'Animation',
    icon: <FaPlay />, 
    to: '/animation',
    notification: 0,
  },

    {
    label: 'Cartooning',
    icon: <FaKeybase />, 
    to: '/cartoon',
    notification:0,
  },
    
      {
    label: 'Character Design',
    icon: <FaGitter />, 
    to: '/chardesign',
    notification:0,
  },
      
        {
    label: 'Comedy',
    icon: <FaLaughSquint />, 
    to: '/comedy',
    notification:0,
  },
        
  {
    label: 'Design',
    icon: <FaSwatchbook />, 
    to: '/design',
    notification: 0,
  },
          
  {
    label: 'DJing',
    icon: <FaTv/>, 
    to: '/djing',
    notification: 0,
  },
            
  {
    label: 'Engineering',
    icon: <FaSatellite />, 
    to: '/engineering',
    notification: 0,
  },
              
  {
    label: 'Game Design',
    icon: <FaVrCardboard />, 
    to: '/gamedesign',
    notification: 0,
  }

];


const linkArray2 = [
  {
    label: 'Settings',
    icon: <FaCogs />,
    to: '/settings',
  },

  {
    label: 'Logout',
    icon: <FaPowerOff />,
    to: '/',
  }
]

export default Sidebar