import React from 'react'
import * as GIcons from 'react-icons/gi'
import * as IoIcons from 'react-icons/io5'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Sidebar(props) {
    return (
        <div className="relative min-h-screen md:flex">
            {/* <!-- mobile menu bar --> */}
            <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
                {/* <!-- logo --> */}
                <Link to="/" className="block p-4 text-white font-bold">Better Dev</Link>

                {/* <!-- mobile menu button --> */}
                <button className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* <!-- sidebar --> */}
            <div className="sidebar bg-blue-600 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">

                {/* <!-- logo --> */}
                <Link to={"/"} className="text-white flex items-center space-x-2 px-4">
                    <GIcons.GiBrain size={40}/>
                    <span className="text-2xl font-extrabold">Mindtoring</span>
                </Link>

                {/* <!-- nav --> */}
                <nav>
                    <Link to="/" className="flex py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        <IoIcons.IoHome size={20} className="mr-2"/> Inicio
                    </Link>
                    <Link to="/mentor" className="flex py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        <FaIcons.FaUserTie size={20} className="mr-2"/> Mentor
                    </Link>
                    <Link to="/mentorized" className="flex py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        <FaIcons.FaUser size={20} className="mr-2" /> Mentorizado
                    </Link>
                    <Link to="/mentoring" className="flex py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                        <FaIcons.FaChalkboardTeacher size={20} className="mr-2" /> Mentoría
                    </Link>
                </nav>
            </div>

            {/* <!-- content --> */}
            <div className="flex-1 p-10 text-2xl font-bold bg-mentor">
                {props.children}
            </div>
            
        </div>
    )
}

export default Sidebar
