import React from 'react'

function Card() {
  return (
    <div class="w-[150px] h-[250px] bg-gradient-to-b from-blue-800 to-blue-500 rounded-sm shadow-2xl ring-4 ring-orange-300 text-white font-sans overflow-hidden relative">
<div class="relative h-[70%]">
    <img
      src="https://res.cloudinary.com/dxpfnowju/image/upload/v1750734531/virat_pic_yx4cnq.png"
      alt="Virat Kohli"
      class="object-cover object-[70%_20%] w-full h-full"
    />
    <div class="absolute top-42 left-8 bg-yellow-400 text-black text-[10px] font-bold px-2 py-0.5 rounded">VIRAT KOHLI</div>
  </div>
  <div class="flex flex-col justify-between">
    <div>
      <p class="text-center text-xs mb-0.25 mt-3">BATSMAN</p>
      <div class="flex justify-between text-xs mb-1">
        <div class="flex flex-col items-center">
          <span class="text-[10px] ml-1">BOWLING</span>
          <span class="text-lg font-bold text-white leading-none">9</span>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-[10px] mr-1">BATTING</span>
          <span class="text-lg font-bold text-white leading-none">91</span>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-center -mt-5">
        <div class="bg-white text-black px-2 py-0.5 rounded-full font-bold text-[11px]">Avg: 50</div>
      </div>
      <div class="flex justify-center -mt-0.5">
        <span class="text-yellow-400 text-[10px]">★★★★★</span>
      </div>
    </div>
  </div>
</div>

  )
}

export default Card