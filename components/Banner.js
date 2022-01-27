import Image from "next/image"
//import BannerImage from '../images/showcase.png'


function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
            <Image src="/illuminated-tent-beach-beautiful-mysterious-night-sky.jpg" layout="fill"
            objectFit="cover"/>
            {/* <Image class="hero" src="" layout="fill"
            objectFit="cover"/> */}
            <div className="group absolute top-1/2 w-full bg-transparent text-center">
                <p className="text-sm sm:text-3xl bg-transparent text-white mb-5">Not sure where to go? Perfect.</p>
                <button className="text-purple-500 group-hover:bg-red-500 group-hover:text-white bg-white px-10 py-4 shadow-md rounded-full
                font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150 focus:outline-none">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
