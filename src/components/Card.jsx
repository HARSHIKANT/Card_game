import React from 'react'
// card.jsx
function Card() {
  return (
    <div className=" shrink-0 w-[140px] h-[250px] bg-gradient-to-b from-blue-800 to-blue-500 rounded-sm shadow-xl ring-3 ring-orange-400 text-white font-sans overflow-hidden relative">
        <div className="relative h-[70%]">
            <img src="https://res.cloudinary.com/dxpfnowju/image/upload/v1750734531/virat_pic_yx4cnq.png" alt="Virat Kohli" className="object-cover object-[70%_20%] w-full h-full"/>
            <div className="absolute top-42 left-8 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded">VIRAT KOHLI</div>
        </div>
        <div className="flex flex-col justify-between">
            <div>
                <p className="text-center text-xs mb-0.25 mt-3">BATSMAN</p>
                <div className="flex justify-between text-xs mb-1">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] ml-1">BOWLING</span>
                        <span className="text-lg font-bold text-teal-50 leading-none">9</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] mr-1">BATTING</span>
                        <span className="text-lg font-bold text-teal-50 leading-none">91</span>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-center -mt-5.5 mb-1">
                    <div className="bg-white text-black px-2 py-0.5 rounded-full font-bold text-[10px]">Avg: 50</div>
                </div>
                <div className="flex justify-center -mt-1">
                    <span className="text-yellow-300 text-[10px]">★★★★★</span>
                </div>
            </div>
        </div>
</div>

  )
}

export default Card