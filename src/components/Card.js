import React from "react"

const Card = props => {
    return (
        <div className="bg-white rounded overflow-hidden shadow-md"> 
            <img className="w-full h-32 sm:h-48 object-cover" src={require('../assets/stew.jpg')} alt="stew" />
            <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">Recipe by Mario</span>
            </div>
        </div>
    )
}

export default Card