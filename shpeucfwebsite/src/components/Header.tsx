/* Core functionality */
import React, { useState } from "react";

/* Assets */
import SHPELogo from "../assets/shpelogo.png";

export default () => {

    /* Controls the display state of the dropdown on small devices */
    const [ showMobileNavbarMenu, setShowMobileNavbarMenu ] = useState(false);

    return (

        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">

            <div className="container md:flex justify-between mx-auto">

                <div className="w-full flex justify-between">

                    <a href="https://shpeucf.com/" className="flex items-center">
                        <img src={ SHPELogo } className="h-6 mr-3 sm:h-9" alt="shpeucf Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SHPE UCF</span>
                    </a>

                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"

                        onClick={() => { setShowMobileNavbarMenu(!showMobileNavbarMenu); }}

                        >

                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd">
                            </path>
                        </svg>
                    </button>

                </div>

                <div className={`${ showMobileNavbarMenu ? "block" : "hidden" } w-full md:flex md:justify-end md:w-auto" id="navbar-default`}>
                
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                        <li>
                            <a href="#aboutus" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                
                                onClick={() => {
                                    setShowMobileNavbarMenu(!showMobileNavbarMenu);
                                }}

                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="https://form.jotform.com/70387424224151" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                
                                onClick={() => {
                                    setShowMobileNavbarMenu(!showMobileNavbarMenu);
                                }}

                            >
                                Membership
                            </a>
                        </li>
                        <li>
                            <a href="https://linktr.ee/shpeucf" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                
                                onClick={() => {
                                    setShowMobileNavbarMenu(!showMobileNavbarMenu);
                                }}

                            >
                                Link Tree
                            </a>
                        </li>
                        <li>
                            <a href="#upcomingconferences" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                
                                onClick={() => {
                                    setShowMobileNavbarMenu(!showMobileNavbarMenu);
                                }}

                            >
                                Conferences
                            </a>
                        </li>

                    </ul>

                </div>

            </div>

        </nav>

    );

};