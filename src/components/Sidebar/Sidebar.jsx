import React,  {useContext} from 'react'
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
    
  } from '../Sidebar/style'
import { logoSVG } from '../../assets'
import { AiOutlineSearch } from 'react-icons/ai'
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
    FaCircleNotch
  } from 'react-icons/fa';
/* import { useContext } from 'react/cjs/react.production.min'; */
import { ThemeContext} from './../../App'



const Sidebar = () =>{
  const {theme, setTheme} =  useContext(ThemeContext)

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
            {!!notification && (
              <SLinkNotification>{ notification}</SLinkNotification>
            )}
            <SlinkLabel>{label}</SlinkLabel>
            <SLinkIcon>{icon}</SLinkIcon>
        </SLink>
        </SLinkContainer>
      ))}

      {/*  <SDivider /> */}
      {linkArray2.map(({label, icon, to}) => (
        <SLogOut key={label}>
          <SLink to="/">
            <SlinkLabel>{label}</SlinkLabel>
            <SLinkIcon>{icon}</SLinkIcon>
          </SLink>
        </SLogOut>
      ))}

      
      {/** Dark mode feature */}
      <STheme>
        <STemeLabel>Dark mode</STemeLabel>
        <SThemeToggler isActive={theme === 'dark'} onClick={() => setTheme((p) => (p  === 'light' ? 'dark' : 'light'))}>
          <SToggleThumbnail  style={theme === 'dark' ? {right: "1px"} : {} }/>
        </SThemeToggler>
      </STheme>
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
    notification:0,
  },
    
      {
    label: 'Character Design',
    icon: <FaGitter />, 
    to: '/chardesing',
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
    to: '/desing',
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
    icon: <FaCircleNotch />,
    to: '/logout',
  }
]

export default Sidebar