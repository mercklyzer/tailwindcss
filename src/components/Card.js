import React from "react"

const Card = ({menu, owner, image}) => {
    return (
        <div className="card"> 
            <img className="w-full h-32 sm:h-48 object-cover" src={image} alt="stew" />
            <div className="m-4">
                <span className="font-bold">{menu}</span>
                <span className="block text-gray-500 text-sm">Recipe by {owner}</span>
            </div>
            <div className="bg-secondary-100 text-secondary-200 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
                <span>25 mins</span>
            </div>
        </div>
    )
}

export default Card