import React from 'react'
// card.jsx
function Card({ name, image, role, batting, bowling, average, stars, objectPosition = "center", scale }) {
  return (
    <div className=" shrink-0 w-[140px] h-[250px] bg-blue-600 rounded-sm shadow-xl ring-3 ring-orange-400 text-white font-sans overflow-hidden relative">
        <div className="relative h-[70%] overflow-hidden">
            <img src={image} alt="Virat Kohli" className="object-cover w-full h-full" style={{ objectPosition, transform: `scale(${scale || 1})`, transformOrigin: "top"}}/>
        </div>
        <div className="absolute top-42 left-1/2 transform -translate-x-1/2 inline-block whitespace-nowrap text-center bg-yellow-400 text-black text-[12px] leading-none font-bold px-1.5 py-0.5 rounded">{name.toUpperCase()}</div>
        <div className="flex flex-col justify-between">
            <div>
                <p className="text-center text-xs mb-0.25 mt-3">{role.toUpperCase()}</p>
                <div className="flex justify-between text-xs mb-1">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] ml-1">BOWLING</span>
                        <span className="text-lg font-bold leading-none text-white">{bowling}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] mr-1">BATTING</span>
                        <span className="text-lg font-bold leading-none text-white">{batting}</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center -mt-5.5 mb-1">
                    <div className="bg-white text-black px-2 py-0.5 rounded-full font-bold text-[10px]">Avg: {average}</div>
                </div>
                <div className="flex justify-center -mt-1">
                    <span className="text-yellow-300 text-[10px]">{'★'.repeat(stars)}{'☆'.repeat(5-stars)}</span>
                </div>
            </div>
        </div>
</div>

  )
}

export default Card