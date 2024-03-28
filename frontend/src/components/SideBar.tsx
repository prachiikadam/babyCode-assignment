

const SideBar = () => {
    return (
      <div className="w-1/5 h-[95vh] bg-gradient-to-b from-blue-600 to-blue-900 text-white fixed sm:flex flex-col justify-between hidden">
        <div>
            <button className="flex flex-row justify-center items-center ">
                    <img src="/babyCode.png" alt="babycode Logo" className="w-[50px] h-[50px] ml-8" />
                    <h5 className=" text-2xl font-extralight">BabyCode</h5>
            </button>
            <div className="mt-[40px]">
                    <div className="flex flex-row ml-8 pl-8 mr-8 pt-1 pb-1 mb-3 hover:border   hover:border-blue-500  hover:rounded-md hover:bg-blue-500 cursor-pointer">
                        <img src="/home (1).png" className="w-[20px] h-[20px] mr-2" alt="" />
                        <h5>Home</h5>
                    </div>
                    <div className="flex flex-row ml-8 pl-8 mr-8 pt-1 pb-1 mb-3 hover:border  hover:border-blue-500  hover:rounded-md hover:bg-blue-500 cursor-pointer">
                        <img src="/Users.png" className="w-[20px] h-[20px] mr-2" alt="" />
                        <h5>Community</h5>
                    </div>
                    <div className="flex flex-row ml-8 pl-8 mr-8 pt-1 pb-1 mb-3 hover:border   hover:border-blue-500 hover:rounded-md hover:bg-blue-500 cursor-pointer">
                        <img src="/Frame 48097125.png" alt="" className="w-[20px] h-[20px] mr-2" />
                        <h5>Stories</h5>
                    </div>
                    <div className="flex flex-row ml-8 pl-8 mr-8 pt-1 pb-1 mb-3 hover:border   hover:border-blue-500  hover:rounded-md hover:bg-blue-500 cursor-pointer">
                        <img src="/Storefront.png" alt="" className="w-[20px] h-[20px] mr-2" />
                        <h5>Shop</h5>
                    </div>
                    <div className="flex flex-row ml-8 pl-8 mr-8 pt-1 pb-1 mb-3 hover:border  hover:border-blue-500  hover:rounded-md hover:bg-blue-500 cursor-pointer">
                        <img src="/message-square.png" alt="" className="w-[20px] h-[20px] mr-2" />
                        <h5>Feedback</h5>
                    </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="w-[90%]  bg-blue-200 rounded-lg border border-blue-200 m-auto flex flex-col ">
                <h2 className="text-blue-700 ml-4 mt-4 text-[22px] font-[400] mb-2">Explore Premium features with ease!</h2>
                <div className="mb-4 ml-4">
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
                <div className="text-blue-700 flex flex-row justify-between ml-4 mb-4 items-center">
                        <div className="text-gray-800">Only @ ₹299</div>
                        <div className="flex flex-row items-center bg-blue-800 pl-4 rounded-tl-[20px] rounded-bl-[20px]">
                            <div className="text-white">Buy Now</div>
                            <img src="/ArrowCircleRight (1).png" alt="" />
                        </div>
                </div>
                
                
            </div>
            <div className="flex flex-row mb-8 mt-4 ml-8 items-center">
                    <img src="/disconnect.png" className="w-[20px] h-[20px] "/>
                    <h6 className="ml-2 text-[18px]">Logout</h6>
            </div>

        </div>

        
      </div>
     
    )
  }
  
  export default SideBar