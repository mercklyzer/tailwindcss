import React from "react"
import Card from "./Card"

const data = [
    {
        image: require('../assets/stew.jpg'),
        menu: '5 Bean Chili Stew',
        owner: 'Mario'
    },
    {
        image: require('../assets/noodles.jpg'),
        menu: 'Veg Noodles',
        owner: 'Mario'
    },
    {
        image: require('../assets/curry.jpg'),
        menu: 'Tofu Curry',
        owner: 'Mario'
    },
]

const Content = props => {
    return (
        <main className="px-4 py-6 sm:px-16 bg-gray-100">
            <div className="flex justify-end">
                <a href="#" className="text-primary">Log in</a>
                <a href="#" className="text-primary ml-2">Sign up</a>
            </div>

            <header>
                <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
                <h3 className="text-2xl font-semibold">For Ninjas</h3>
            </header>

            <div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
        
                <div className="mt-8">
                    {/* <!-- cards go here --> */}
                    {
                        data.map(({menu, image, owner},i) => <Card key={i} menu={menu} image={image} owner={owner}/>)
                    }
                </div>

                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

                <div className="mt-8">
                {/* <!-- cards go here --> */}
                </div>
            </div>

            <div className="flex justify-center">
                <div className="bg-secondary-200">Load more</div>
            </div>    
        </main>
    )
}

export default Content