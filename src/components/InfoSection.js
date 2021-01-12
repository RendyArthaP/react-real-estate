import React from 'react'

const InfoSection = ({heading, paragraphOne, paragraphTwo, image, buttonLabel, reverse}) => {
  return (
    <div className="text-left py-10">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="px-6 lg:w-8/12">
          <h1 className="font-bold font-display text-2xl w-10/12">{heading}</h1>
          <p className="py-4">{paragraphOne}</p>
          <p className="py-4">{paragraphTwo}</p>
          <div class="pb-10">
            <button to="/" className="bg-black w-32 h-10 py-1 px-1 rounded text-gray-300 font-medium">
              {buttonLabel}
            </button>
          </div>
        </div>
        <div className="w-full">
          <img src={image} alt="home" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
