/* Core functionality */
import React from "react";

export default () => {

    return (

        <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023

                <a href="https://shpeucf.com/" className="hover:underline">
                    {" SHPE UCF"}
                </a>
                . All Rights Reserved.

            </span>

                <div className="md:flex sm:flex-col md:flex-row md:flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0 sm:w-full sm:justify-center sm:items-center md:justify-end">

                    <div>
                        <a href="#aboutus" className="mr-4 hover:underline md:mr-6 text-white">About Us</a>
                    </div>
                    <div>
                        <a href="https://form.jotform.com/70387424224151" className="mr-4 hover:underline md:mr-6 text-white">Membership</a>
                    </div>
                    <div>
                        <a href="https://linktr.ee/shpeucf" className="mr-4 hover:underline md:mr-6 text-white">LinkTree</a>
                    </div>
                    <div>
                        <a href="#upcomingconferences" className="mr-4 hover:underline md:mr-6 text-white">Conferences</a>
                    </div>

                </div>

        </footer>

    );

};