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
    FaCloudSun,
} from 'react-icons/fa';
  
import { ThemeContext} from './../../App'



const Sidebar = () =>{
  const { theme, setTheme } = useContext(ThemeContext)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <SSidebar isOpen={sidebarOpen} >
      <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
         <FaChevronCircleLeft />
      </SSidebarButton>
   

      <SSearch style={!sidebarOpen ? {width: `fit-content`} : {}}>
        <SSearchIcon> 
          <FaSearch />
        </SSearchIcon>
         <input placeholder="Search" style={!sidebarOpen ? {width: 0, padding: 0} : {}}/>
      </SSearch>


      {/* <SDivider /> */}
      
      {linkArray.map(({label, icon, notification, to}) => (
      <SLinkContainer key={label} style={!sidebarOpen ? { width: `fit-content` } : {}}>
          <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SlinkLabel>{label}</SlinkLabel>
                {!!notification && (
                <SLinkNotification>{ notification}</SLinkNotification>
              )}
              </>
            )}       
        </SLink>
        </SLinkContainer>
      ))}

      <SDivider /> 
      {linkArray2.map(({label, icon, to}) => (
        <SLogOut key={label} style={!sidebarOpen ? { width: `fit-content` } : {}}>
          <SLink to={to}  style={!sidebarOpen ? { width: `fit-content` } : {}}>
            <SLinkIcon>{icon}</SLinkIcon>
            {sidebarOpen && (
              <SlinkLabel>{label}</SlinkLabel>
            )}
          </SLink>
        </SLogOut>
      ))}

         
      {/** Dark mode feature */}
      <STheme>
        {sidebarOpen && <STemeLabel style={{color: "#fff"}}><FaCloudSun/>   Dark mode</STemeLabel>}
        <SThemeToggler isActive={theme === 'dark'} onClick={() => setTheme((p) => (p  === 'light' ? 'dark' : 'light'))}>
          <SToggleThumbnail  style={theme === 'dark' ? {right: "1px"} : {} }/>
        </SThemeToggler>
      </STheme>
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