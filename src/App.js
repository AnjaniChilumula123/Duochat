
import './App.css';
import Login from './Components/Login';
import React from 'react';
import Welcome from './Components/Welcome';
import { Routes ,Route } from 'react-router-dom';

import MainContainer from './Components/MainContainer';
import Chatarea from './Components/Chatarea';
import AvailableUsers from './Components/AvailableUsers';
import AvailableGroups from './Components/AvailableGroups';
import ConversationItems from './Components/ConversationItems';
import CreateGroups from './Components/CreateGroups';
import { useDispatch, useSelector}  from 'react-redux'


function App() {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
   
    <div className={"App"  +(lightTheme? "" :" black")}>
       <Routes>
           <Route path="/" element={<Login/>}/>
           <Route path="app" element={<MainContainer/>}>
            <Route  path='welcome' element={<Welcome/>}/>
             <Route path='chat' element={<Chatarea/>}/>
             <Route path='create-groups' element={<CreateGroups/>}/>
             <Route path='av-users' element={<AvailableUsers/>}/>
             <Route path='av-groups' element={<AvailableGroups/>}/>
             {/* <Route path='chat' element={<Chatarea/>}/> */} 
           </Route>
       </Routes>
    </div>
  );
}

export default App;
