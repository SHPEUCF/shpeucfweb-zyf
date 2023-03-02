/* Core functionality */
import React from "react";
import Helmet from "react-helmet";

/* Components */
import DynamicButton from "./DynamicButton";

/* Properties interface */
interface DynamicCardProps {

    hasHead: boolean,
    headText?: string | "",
    hasBody: boolean,
    bodyText?: string | "",
    hasLink: boolean,
    link?: string | "",
    hasButton: boolean,
    buttonText?: string | "",
    hasImage: boolean,
    imageSRC?: string | "",
    hasImageCaption: boolean,
    imageCaptionText?: string | ""

};

export default ({ hasHead, headText, hasBody, bodyText, hasLink, link, hasButton, buttonText, hasImage, imageSRC, hasImageCaption, imageCaptionText }:DynamicCardProps) => {

    return (

        <div className="max-w-[350px] m-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            
            {   
                hasHead && (
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            { headText }
                        </h5>
                    </a>
                )
            }

            {
                hasBody && (
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        { bodyText }
                    </p>
                )
            }
            
            
            {
                hasButton && (
                    <DynamicButton text={buttonText} hasLink={hasLink} link={link} />
                )
            }

            {
                hasImage && (
                    <div className="flex flex-col items-center justify-center">
                        
                        <img className="w-[180px] h-[240px] my-2" src={imageSRC} />
                        
                        {
                            hasImageCaption && (
                                <p>{ imageCaptionText }</p>
                            )
                        }

                    </div>
                )
            }

        </div>

    );

};