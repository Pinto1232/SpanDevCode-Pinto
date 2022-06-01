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
import { useGetTopicsQuery} from '../../services/SpanApi'
import { ThemeContext} from './../../App'



const Sidebar = () =>{
  const { theme, setTheme } = useContext(ThemeContext)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { data: tbData, isLoading } = useGetTopicsQuery()
  
  console.log('Data Id', tbData);
  

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
    label: 'Digital Nomad',
    icon: <FaPlay />, 
    to: '/digital-nomad',
    notification: 0,
  
  },

    {
    label: 'Current Events',
    icon: <FaKeybase />, 
    to: '/current-events',
    notification:0,
  },
    
      {
    label: 'Wallpapers',
    icon: <FaGitter />, 
    to: '/wallpapers',
    notification:0,
  },
      
        {
    label: '3D Renders',
    icon: <FaLaughSquint />, 
    to: '/3d-renders',
    notification:0,
  },
        
  {
    label: 'Textures & Patterns',
    icon: <FaSwatchbook />, 
    to: '/textures-patterns',
    notification: 0,
  },
          
  {
    label: 'Experimental',
    icon: <FaTv/>, 
    to: '/experimental',
    notification: 0,
  },
            
  {
    label: 'Architecture',
    icon: <FaSatellite />, 
    to: '/architecture',
    notification: 0,
  },
              
  {
    label: 'Nature',
    icon: <FaVrCardboard />, 
    to: '/nature',
    notification: 0,
  },

  {
    label: 'Business & Work',
    icon: <FaSatellite />, 
    to: '/business-work',
    notification: 0,
  },

  {
    label: 'Fashion',
    icon: <FaSatellite />, 
    to: '/fashion',
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