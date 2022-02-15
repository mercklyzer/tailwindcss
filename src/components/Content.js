import React from "react"
import Card from "./Card"

const Content = props => {
    return (
        <main className="px-16 py-6 bg-gray-100">
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
                    <Card />
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