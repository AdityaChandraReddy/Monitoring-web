import React, { useEffect, useRef, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined'
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
  {
    name: "Editor",
    Icon: <NoteAltOutlinedIcon />,
    link: '/EditorHome'

  },
]


function SideBar() {




  const imagegUpload = useRef<any>(null)
  const [imageURL, setImageURL] = useState('');

  const imageSubmitHandler = async (e: any) => {
    console.log('e', e.target.files[0])
    let gi = e.target.files[0]
    const formData = new FormData()
    formData.append('files', gi)
    await fetch('http://localhost:8000/api/uploadProfilePic/', {
      method: "POST",
      headers: {
        "Contetnt-Type": "multipart/form-data"
      },
      body: formData

    }).then((res) => {
      console.log('res', res.json())
    })
  }
  const getProfileImage = async () => {
    console.log('ress')
    const response = await fetch(`http://localhost:8000/api/getProfilePic/${1}`).then((res) => {
      return res.json()
    })
    console.log('response ', response)
    setImageURL(response.link)
  }

  useEffect(() => {
    getProfileImage();
  }, [])


  let navigate = useNavigate()
  return (
    <div className='sidebar-container aside'>
      <div>
        <input
          ref={imagegUpload}
          onChange={(e) => {
            console.log('sdfsdfsdfsdfsdff')
            imageSubmitHandler(e)
          }} type='file' name='profile-pic' style={{ display: "none" }} accept='image/*' />

        <div style={{ height: "80px", width: "80px", borderRadius: 50, margin: "auto" }}
          onClick={() => {
            imagegUpload?.current?.click()!;
          }}>
          <img
            src={imageURL}
            style={{
              width: "100%",
              height: "100%",
              // position:"absolute",
              borderRadius: 50
            }}
          />
        </div>
      </div>
      <div>
        <ul className='sidebar-items' >
          {sideBarItems.map((item, index) => <li
            style={{ display: "flex", cursor: "pointer", gap: '1em', padding: '10px' }}
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