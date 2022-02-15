import React from "react"

const Content = props => {
    return (
        <main className="px-16 py-6">
            <div>
                <a href="#" className="text-primary font-one">Log in</a>
                <a href="#" className="text-primary font-two">Sign up</a>
            </div>

            <header>
                <h2 className="text-gray-700 text-6xl font-semibold font">Recipes</h2>
                <h3 className="text-2xl font-semibold">For Ninjas</h3>
            </header>

            <div>
                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
        
                <div className="mt-8">
                    {/* <!-- cards go here --> */}
                    <div> 
                        <img src={require('../assets/stew.jpg')} alt="stew" />
                        <div>
                        <span>5 Bean Chili Stew</span>
                        <span>Recipe by Mario</span>
                        </div>
                    </div>
                </div>

                <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>

                <div className="mt-8">
                {/* <!-- cards go here --> */}
                </div>
            </div>

            <div>
                <div className="bg-secondary-200">Load more</div>
            </div>    
        </main>
    )
}

export default Content