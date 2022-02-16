import React, { useState } from "react"

const Navbar = props => {
    const [showMenu, setShowMenu] = useState(true)

    return(
        <div className="md:col-span-1 md:flex md:justify-end">
            <nav className="text-right">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                        <a href="/" className="hover:text-gray-700">Food Ninja</a>
                    </h1>
                    <div className="px-4 cursor-pointer md:hidden" onClick={() => {
                        setShowMenu((value) => !value)
                        console.log("click")
                    }}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </div>
                </div>
                <ul className={`text-sm mt-6 ${showMenu?'hidden':''} md:block`}>
                    <li className="text-gray-700 font-bold py-1 border-r-4 border-primary">
                        <a href="#" className="px-4 flex justify-end">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                            <span className="ml-2">Home</span>
                        </a>
                    </li>
                    <li className="py-1">
                        <a href="#" className="px-4 flex justify-end">
                        <svg className="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span className="ml-2">About</span>
                        </a>
                    </li>
                    <li className="py-1">
                        <a href="#" className="px-4 flex justify-end">
                            <svg className="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span className="ml-2">Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar