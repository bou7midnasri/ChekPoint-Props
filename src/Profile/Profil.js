import React from 'react'
import image from './img.jpg'
import PropTypes from 'prop-types';


function Profil(props) {
    return (
        <div>
            {props.handleName()}
            <h1>{props.fullName}</h1>
            <p>My Bio is {props.bio}</p>
            <p>My Job is {props.profession}</p>
           
               <h3> {props.image}</h3>
               
           <img src={image} alt="My Profile"/>
          
          
        

        </div>
    )
}

Profil.defaultProps ={
    fullName: "Nasri Ahmed",
     bio : "Good",
     profession : "web developer",
     image : "welcome my profile image"
}


Profil.propTypes={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string

}


export default Profil


