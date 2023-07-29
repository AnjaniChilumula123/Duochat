import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { IconButton } from '@mui/material';
import './myStyles.css'
import Lottie from 'lottie-react'
import Group from '../Group.json'

function CreateGroups() {
  return (
    <div className='createGroups-container'>
       <Lottie className='group' loop={true} animationData={Group}/>
       <div className='sd-search'>
            <input placeholder='Enter Group Name' className='searchbox'></input>
            
      <IconButton>
        <CreateIcon/>
      </IconButton>
      </div>
    </div>
  )
}

export default CreateGroups