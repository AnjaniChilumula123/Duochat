import React from 'react'
import "./myStyles.css"
import { useDispatch, useSelector}  from 'react-redux'
import {store} from "../Features/store"
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import {AnimatePresence , motion } from "framer-motion"

function AvailableUsers() {
   const lightTheme = useSelector((state) => state.themeKey);
  return (
   <AnimatePresence>  
    <motion.div 
       initial={{opacity:0 ,scale:0}}
       animate={{opacity:1 ,scale:1}}
       exit={{opacity:0,scale:0}}
       transition={{
         ease:"anticipate",
         duration:"0.3"
       }}
    className={'available-container'+(lightTheme? "":" grey")}>
        <div className={'av-header '+(lightTheme? "":"dark")}>
            <p>Available Users</p>
        </div>
        <div className={'av-search '+(lightTheme? "":" dark")}>
            <IconButton>
                <SearchIcon className={"icon "  +(lightTheme? "" :"dark")}/>
            </IconButton>
           <input placeholder='search'className={'av-searchbox '+(lightTheme? "":"dark")}></input>
        </div>
        <div className='av-users'>
            <motion.div whileHover={{scale:1.04}} whileTap={{scale:0.98}} className={'av-item'+(lightTheme? "":" dark")}> 
               <p className='con-icon'>T</p>
               <p className='con-title'>Test user</p>
            </motion.div>
            <motion.div whileHover={{scale:1.04}} className={'av-item'+(lightTheme? "":" dark")}> 
               <p className='con-icon'>T</p>
               <p className='con-title'>Test user</p>
            </motion.div>
            <motion.div whileHover={{scale:1.04}} className={'av-item'+(lightTheme? "":" dark")}> 
               <p className='con-icon'>T</p>
               <p className='con-title'>Test user</p>
            </motion.div>
            <motion.div whileHover={{scale:1.04}} className={'av-item'+(lightTheme? "":" dark")}> 
               <p className='con-icon'>T</p>
               <p className='con-title'>Test user</p>
            </motion.div>
            
            <motion.div whileHover={{scale:1.04}} className={'av-item'+(lightTheme? "":" dark")}> 
               <p className='con-icon'>T</p>
               <p className='con-title'>Test user</p>
            </motion.div>
            <motion.div whileHover={{scale:1.04}} className={'av-item'+(lightTheme? "":" dark")}> 
               <p className='con-icon'>T</p>
               <p className='con-title'>Test user</p>
            </motion.div>
            <motion.div whileHover={{scale:1.04}} className={'av-item'+(lightTheme? "":" dark")}> 
               <p className='con-icon'>T</p>
               <p className='con-title'>Test user</p>
            </motion.div>
            <motion.div whileHover={{scale:1.04}} className={'av-item'+(lightTheme? "":" dark")}> 
               <p className='con-icon'>T</p>
               <p className='con-title'>Test user</p>
            </motion.div> 
            <motion.div whileHover={{scale:1.04}} className={'av-item'+(lightTheme? "":" dark")}> 
               <p className='con-icon'>T</p>
               <p className='con-title'>Test user</p>
            </motion.div>

        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default AvailableUsers