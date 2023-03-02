/* Core functionality */
import React from "react";
import TitleHelmet from "react-helmet";

/* Components */
import DynamicCard from "../components/DynamicCard";
import DynamicButton from "../components/DynamicButton";
import DynamicCarousel from "../components/DynamicCarousel";

/* Properties interface */
interface BoardMemberCardProps {

    name: string | "",
    position: string | "",
    imageSRC: string | ""

};

export default () => {

    /* Has the image SRC paths for all of the board members. */
    const boardMembersData:any = [
        { name: "Nick Libreros", position: "President", imageSRC: "./pictures/board/NickL.png" },
        { name: "Andres Acevedo", position: "Vice President", imageSRC: "./pictures/board/AndresA.png" },
        { name: "Steph Colton", position: "Secretary", imageSRC: "./pictures/board/StephC.png" },
        { name: "Cecille Castro", position: "Treasurer", imageSRC: "./pictures/board/CecilleC.png" },
        { name: "Alan Luko", position: "Corporate Affairs Chair", imageSRC: "./pictures/board/AlanL.png" },
        { name: "Anne Reed", position: "External Chair", imageSRC: "./pictures/board/AnneR.png" },
        { name: "Valentina Medina", position: "Marketing Chair", imageSRC: "./pictures/board/ValM.png" },
        { name: "Richard Hudson", position: "Pro Dev Co-Chair", imageSRC: "./pictures/board/RichardH.png" },
        { name: "Gabriela Medina", position: "Pro Dev Co-Chair", imageSRC: "./pictures/board/GabrielaM.png" },
        { name: "Brenden Nocca", position: "Projects Chair", imageSRC: "./pictures/board/BrendenN.png" },
        { name: "Juan Trawczynski", position: "Social Chair", imageSRC: "./pictures/board/JuanT.png" },
        { name: "Bea Navas", position: "SHPEtinas Chair", imageSRC: "./pictures/board/BeaN.png" },
        { name: "Bryce Villanueva", position: "Technology Chair", imageSRC: "./pictures/board/BryceV.png" },
    ];

    return (

        <div className="w-screen flex flex-col items-center justify-evenly bg-slate-100">
            
            {/* Enforces the home page title */}
            <TitleHelmet>
                <meta charSet="utf-8" />
                <title>SHPE UCF</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </TitleHelmet>

            {/* Primary heading */}
            <div className="py-10 overflow-y-scroll">

                {/* Image Carousel */}
                <DynamicCarousel
                    imageSRCList={[
                        "./pictures/carousel1.jpg",
                        "./pictures/carousel2.jpg",
                        "./pictures/carousel3.jpg"
                    ]}
                />

                <h1 id="aboutus" className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                    About the club
                </h1>

                <p className="mb-6 text-lg font-normal text-gray-900 lg:text-xl sm:px-16 xl:px-48">
                    Welcome to Society of Hispanic Professional Engineers UCF Chapter, and the beginning of your success as a future leader. Here you will find information about our chapter, SHPE National Conference, and our future events.
                    What do we offer? The opportunity to prepare yourself as a professional that no classroom setting does. You will have access to everything from professional and leadership workshops, scholarships, internships, networking opportunities with fellow engineering students from the professional chapter and industry leaders at a local and national level! We bring you the best professional development, engineering, and social experiences with a hispanic twist. Want to join us?
                </p>

                <DynamicButton

                    text={"Become a member"}
                    hasLink={true}
                    link={"https://form.jotform.com/70387424224151"}

                />

            </div>

            {/* Section: Calendar */}
            <div className="my-10">

                <h2 className="my-8 text-2xl font-extrabold text-gray-900">Upcoming Events</h2>

                <iframe src="https://calendar.google.com/calendar/embed?src=shpe.ucf.chapter%40gmail.com&ctz=America%2FNew_York"
                    className="w-[75vw] h-[70vh]"
                />

            </div>

            {/* Section: Conferences */}
            <div className="my-10">
                
                <h2 id="upcomingconferences" className="my-8 text-2xl font-extrabold text-gray-900">Upcoming Conferences</h2>

                <div className="w-full flex flex-wrap items-center sm:flex-col sm:justify-evenly md:flex-row md:justify-center">

                    <DynamicCard

                        hasHead={true}
                        headText={"SHPE 2023 Conference"}
                        hasBody={true}
                        bodyText={"Attend the largest engineering conference in the country."}
                        hasButton={true}
                        buttonText={"Learn more"}
                        hasLink={true}
                        link={"https://shpe.org/2023-2/"}
                        hasImage={false}
                        hasImageCaption={false}

                    />

                    <DynamicCard

                        hasHead={true}
                        headText={"ALPFA 2023 Conference"}
                        hasBody={true}
                        bodyText={"Attend the largest business and finance conference in the country."}
                        hasButton={true}
                        buttonText={"Learn more"}
                        hasLink={true}
                        link={"https://www.alpfa.org/page/convention-2023/"}
                        hasImage={false}
                        hasImageCaption={false}

                    />

                </div>

            </div>

            {/* Section: The Board */}
            <div className="my-10">
                
                <h2 className="my-8 text-2xl font-extrabold text-gray-900">{ `The Board` } </h2>

                <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 gap-2">

                    {
                        boardMembersData.map((boardMember:BoardMemberCardProps) => {

                            const { name, position, imageSRC } = boardMember;

                            return <DynamicCard
                                hasHead={true}
                                headText={name}
                                hasBody={false}
                                hasLink={false}
                                hasButton={false}
                                hasImage={true}
                                imageSRC={imageSRC}
                                hasImageCaption={true}
                                imageCaptionText={position}
                            />

                        })
                    }

                </div>

            </div>

        </div>

    );

};
