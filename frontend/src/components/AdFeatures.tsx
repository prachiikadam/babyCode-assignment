

const AdFeatures = () => {
  return (
    <div>
        <div className="sm:hidden flex flex-row w-[90%]  bg-blue-200 rounded-lg border border-blue-200 m-auto mt-4 mb-4">
            <div className="flex flex-col ">
                
                    <h2 className="text-blue-700 ml-4 mt-4 text-[22px] font-[400] mb-2">Explore Premium features with ease!</h2>
                    <div className=" flex flex-row  items-center">
                        <img src= "/tick.png" className="w-[30px] h[30px]"/>
                        <h6 className="font-[200] text-gray-600 text-[14px]">Unlimited Speaking Test Access</h6>
                    </div>
                    <div className=" flex flex-row  items-center">
                        <img src= "/tick.png" className="w-[30px] h[30px]"/>
                        <h6 className="font-[200] text-gray-600 text-[14px]"> Unlimited Writing Test Access</h6>
                    </div>
                    <div className=" flex flex-row  items-center">
                        <img src= "/tick.png" className="w-[30px] h[30px]"/>
                        <h6 className="font-[200] text-gray-600 text-[14px]">Analyse Your Answer</h6>
                    </div>
                    <div className=" flex flex-row  items-center">
                        <img src= "/tick.png" className="w-[30px] h[30px]"/>
                        <h6 className="font-[200] text-gray-600 text-[14px]" >Check Band Score</h6>
                    </div> 
                
               
                
                
            </div>
            <div className="text-blue-700 flex flex-col justify-center ml-4 mb-4 items-center">
                        <div className="text-gray-800">Only @ ₹299</div>
                        <div className="flex flex-row items-center bg-blue-800 pl-4 rounded-tl-[20px] rounded-bl-[20px]">
                            <div className="text-white">Buy Now</div>
                            <img src="/ArrowCircleRight (1).png" alt="" />
                        </div>
            </div>
        </div>
    </div>
  )
}

export default AdFeatures