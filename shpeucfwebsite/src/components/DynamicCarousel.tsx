/* Core functionality */
import React, { useEffect, useState } from "react";
let require: any;

/* Properties interface */
interface DynamicCarouselProps {

    /*
    to avoid error "any", intended to be string[]
    passed routes to images in assets based on DynamicCarousel
    location... ex: ../assets/ ** /{ fileName.ext }
    */

    imageSRCList: string[];

};

// Work in progress
export default ({ imageSRCList }:DynamicCarouselProps) => {

    // Controls the current image being shown in the carousel
    const [ showImageByID, setShowImageByID ] = useState(0);

    useEffect(() => {

    }, [ showImageByID ]);
    
    return (

        <div className="w-screen my-8">

            <div id="default-carousel" className="relative sm:bg-cover bg-no-repeat" data-carousel=""
                style={{
                    backgroundImage: `url(${imageSRCList[showImageByID]})`,
                    backgroundSize: "cover"
                }}
            >

                <div className={`relative h-56 overflow-hidden rounded-lg bg-contain md:h-96 bg-[url('${ imageSRCList[showImageByID] }')]`}></div>

                {/* Goes to the previous image if possible */}
                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev

                    onClick={() => {
                        setShowImageByID(showImageByID > 1 ? showImageByID - 1 : 0);
                    }}

                >

                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span className="sr-only">Previous</span>
                    </span>

                </button>

                {/* Goes to the next image if possible */}
                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next
                
                    onClick={() => {
                        setShowImageByID(showImageByID < imageSRCList.length - 1 ? showImageByID + 1 : imageSRCList.length - 1);
                    }}
                
                >

                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span className="sr-only">Next</span>
                    </span>

                </button>

            </div>

        </div>

    );

};