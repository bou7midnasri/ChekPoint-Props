import React from 'react';
import Profil from './Profile/Profil.js'
import './App.css';
const handleName= ()=>{
  alert(" name of profile user: Nasri Ahmed")
 }

function App() {
  return (
    <div className="App">
      <handleName/>
     <Profil
     fullName ="Nasri Ahmed"
     bio = "Good"
     profession = "web developer"
     image ="welcome my profile image"
     handleName ={handleName}
     />

   
    </div>
  );
}

export default App;
