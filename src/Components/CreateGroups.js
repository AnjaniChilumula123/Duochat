import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { IconButton } from '@mui/material';
import './myStyles.css'
import Lottie from 'lottie-react'
import Group from '../Group.json'
import { useDispatch, useSelector}  from 'react-redux'

function CreateGroups() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <div className='createGroups-container'>
       <Lottie className='group' loop={true} animationData={Group}/>
       <div className={"sd-search"  +(lightTheme? "" :" dark")}>
            <input placeholder='Enter Group Name' className={"searchbox"  +(lightTheme? "" :" dark")}></input>
            
      <IconButton>
        <CreateIcon/>
      </IconButton>
      </div>
    </div>
  )
}

export default CreateGroups