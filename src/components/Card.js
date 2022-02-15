import React from "react"

const Card = props => {
    return (
        <div className="bg-white"> 
            <img src={require('../assets/stew.jpg')} alt="stew" />
            <div>
                <span>5 Bean Chili Stew</span>
                <span>Recipe by Mario</span>
            </div>
        </div>
    )
}

export default Card