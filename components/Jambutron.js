import Image from "next/image"


function Jambutron() {
    return (
        <div className="lg:flex lg:flex-row md:flex  md:flex-nowrap  sm:flex-col justify-around w-9/12 rounded-xl bg-gray-100 pt-32 pb-32 z-40 absolute -mt-52 mb-52 left-36"> 
            <div className="font-sans font-normal">
                <h6 className="text-lg text-center font-medium">Introducing</h6>
                <h1 className="text-7xl text-center font-semibold">Airbnb <br /> gift gards</h1>
                <button className="text-sm text-white bg-gray-900 hover:bg-gray-800 px-6 py-6 pt-3.5 pb-3.5 md:ml-20 mt-6 rounded-lg sm:ml-72">Shop now</button>
            </div>
            <div>
                <img src="/card.png" className="sm:ml-62"/>
            </div>
        </div>
    )
}

export default Jambutron
