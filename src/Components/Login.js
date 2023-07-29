import React from 'react'
import './myStyles.css'
import Lottie from 'lottie-react'
import Entry from '../Entry.json'
import { TextField, colors } from '@mui/material'
import {Button} from '@mui/material'

function Login() {
  return (
    <div className='login-container'>
        <div className='img-container'>
              <Lottie animationData={Entry}/>
        </div>
        <div className='login-form'>
            <div className='login-box'>
            <p className="login-header">Login to you Account</p>
            <TextField id="outlined-basic" label="Email" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <Button variant="contained">submit</Button>
            </div>
            
      </div>
    </div>
  )
}

export default Login