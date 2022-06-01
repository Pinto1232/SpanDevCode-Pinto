import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { btnReset, v } from '../../styles/variables'



export const SSidebar = styled.div`
  width: ${({ isOpen }) => (!isOpen ? `auto` : v.sidebarWidth)};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing}


  position: relative;
`

export const SSidebarButton = styled.button`
  ${btnReset};
  position: relative; 
  top: ${v.xxlSpacing};
  right: ${({ isOpen}) => isOpen ? `-16px` : `-40px`};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.bg3};
  box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  

  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`


export const SLogo = styled.div`
   max-width: 100%;

   img{
       max-width: 100%;
       height: auto;
       margin: 10px 60px 10px;
   }
   cursor: pointer;

   marrgin-bottom: ${v.lgSpacing};
`





export const SSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  margin: 10px 5px 5px 5px;

  input{
      padding: 0 ${v.smSpacing};
      font-family: inherit;
      letter-spacing: inherit;
      font-size: inherit;
      width: 100%;
      outline: none;
      border: none;
      color: inherit;
      background: transparent;
  }
  display: flex;
`


export const SSearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;
  color: #fff;
 

  png{
      font-size: 10px;
  }
`

export const SDivider = styled.div`
  height: 1px;
  max-width: 100%;

  background: ${({ theme }) => theme.bg4};
  margin: ${v.mdSpacing} 0;
  margin-left: ${v.mrLeft};
  margin-right: ${v.mrRight};
  margin-bottom: ${v.mrBottom};
`

export const SLinkContainer = styled.div`
    background: transparent;
    color: #fff;
    margin-top: 12px;
    padding: 5px;
 

  border-radius: ${v.borderRadius};
  margin: 8px 0;
  cursor: pointer;
  margin: 5px;

  :hover { 
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    background: transparent;
  }

`

export const SLink = styled(Link)`
    display: flex;
    aligh-items: center;
    text-decoration: none;
    color: inherit;
    font-size:16px;
    padding: calc(${v.smSpacing} - 2px) 0;
`

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  png{
    font-size:20px;
  }
`

export const SlinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.primary}
  color: white;

  margin-right: ${v.mdSpacing};
`

export const SLogOut = styled.div`
   background: #111435e8;
    color: #fff;
    margin-top: 12px;
    padding: 5px;
    max-width: 100%;
 
  
 

  border-radius: ${v.borderRadius};
  cursor: pointer;
  margin: 5px;

  :hover { 
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    background: transparent;
  }
` 

export const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    margin: 10px;
    margin-bottom: ${v.mrBottom};
`

export const STemeLabel = styled.span`
  display: block;
  flex: 1;
`

export const SThemeToggler = styled.button`
   ${btnReset};
   margin-top: ${v.mrTop}
   margin: 0 auto;
   cursonr: pointer;
   width: 36px;
   height: 20px;
   border-radius: 10px;
   background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};
   
   position: relative;
`

export const SToggleThumbnail = styled.div `
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: .2s ease right;
  right: calc(100% - 18px -1px);
  border-radius: 50%;
  background: ${({ theme }) => theme.bg};
`

export const SHeading = styled.div`
  font-weight: bold;
  font-size: 18px;
`



/* Home Page */

export const SContainer = styled.div`
  height: 100vh;
  background-blend-mode: overlay;
`

export const HeadingHome = styled.div`
     display:flex;
     align-items: center;
     justify-content: space-between;
     flex-wrap: wrap;

     & .menu{
       margin: 1em;
       text-align: center;
     }
`

export const LogoHome = styled.div`
    font-size: 48px;
    color: #e86729;
    font-weight: 600;
    margin-left: 12px;

    font-weight: bold;
    @media (max-width: 768px) {
      max-width: 100%;
      margin-left: 4%!important;
    }

`

export const MenuHome = styled.div`
    ${btnReset};
    font-size: 18px;
    color: #fff;
    cursor: pointer;
    text-transform: lowercase;

    background: #e86729;
    display: inline-block;
    padding: 10px;
    padding-left: 1.5em;
    padding-right: 1.5em;

    margin-right: 12px;
    border-radius: ${v.borderRadius};

     &:hover {
     background-color: #252846;
     transform: translate(0%, -10%);
      transition: 0.2s ease-in;
   }

    @media (max-width: 768px) {
      max-width: 100%;
      margin-left: 24%!important;
    }
`

export const SMainSection = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
  margin: 1em;
  margin-top:4em;

 font-size: 40px;
 color: #fff;




 `
export const SSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
`
export const SHeader = styled.div`
  font-size: 2em;
  font-weight: bold;

  @media (max-width: 768px) {
    line-height: 1;
    font-size: 100%;
    text-align: center;
  }
`
export const SParagraph = styled.div`
  text-transform: uppercase;
  font-size: 27px;

  margin-top: 10px;

    @media (max-width: 768px) {
    line-height: 1;
    font-size: 50%;
    text-align: center;
  }
`
export const SButton = styled.div`
| ${btnReset};
   background: #e86729;
   padding-top: 5px;
   padding-bottom: 10px;
   display: inline-block;
   max-width: 16em;

   text-align: center;
   margin-top: 1em;
   font-size: 19px;
   cursor: pointer;
   border-radius: ${v.borderRadius};

   text-transform: uppercase;
   transform: translate(0%);
  transition: 0.3s ease-out;

   &:hover {
     background-color: #252846;
     transform: translate(0%, -10%);
      transition: 0.2s ease-in;
   }

   @media (max-width: 768px) {
      margin-left: 30%!important;
      margin-right: 30%!important;
      font-size: 12px;
      padding: 20px;
    }

`

/* Digital Nomad */
export const BoxCard = styled.div`
     display: flex;
     flex-wrap: wrap;
    

     margin-left: 4em;
  
`

