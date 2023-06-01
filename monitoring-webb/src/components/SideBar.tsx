import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import './Sidebar.css'

const sideBarItems = [
  {
    name: "Home",
    Icon: <HomeIcon />,
    link: '/'

  },
  {
    name: "Logout",
    Icon: <LogoutIcon />,
    link: '/login'

  },
]


function SideBar() {
  let navigate = useNavigate()
  return (
    <div className='sidebar-container'>
      <div>
        <ul className='sidebar-items' >
          {sideBarItems.map((item, index) => <li
            style={{ display: "flex", cursor: "pointer", gap: '1em' }}
            onClick={() => {
              // history.push(item.link)
              navigate(item.link)
            }} key={index}>
            <div>
              {item.Icon}
            </div>
            <div>
              {item.name}
            </div>

          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default SideBar