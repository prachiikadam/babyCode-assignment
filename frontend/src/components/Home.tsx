import Features from "./Features"
import HomeGraph from "./HomeGraph"


const Home = () => {
  return (
    <div className="bg-gray-100 ">
        <div className="ml-12">
          <h5 className="text-2xl font-[200] pt-4 pb-4 "> Your Progress Summary </h5>
          <div className="flex flex-row items-center flex-wrap">
            <HomeGraph/>
            <div className="w-[350px] h-[260px] ml-8 relative ">
              <img src="../../public/Frame 427319170.png" alt="side image" className="w-full h-full" />
              <div className="absolute h-1/2 top-24 text-white text-center">
                <div className="text-3xl font-thin ml-6 mr-6">One Share can many lives</div>
                <div className="ml-6 mr-6 font-[100] text-[14px] text-gray-400"> Your one share can unlock a world of education for unprivileged</div>
                <button className="border bg-white border-white text-black w-[150px] rounded-[12px] mt-3">Share App</button>
              </div>
              
            </div>
          </div>
          <h5 className="text-2xl font-[200] pt-4 pb-4 "> Prepare with ease </h5>
          <div className=" flex flex-row">
            <Features/>
            <div className=" flex flex-col w-[35%] flex-wrap">
              <div className="flex flex-row w-70 border border-white justify-center items-center w-3/4 bg-white rounded-[8px]">
                <img src="../../public/youtube (8) 1.png" className="w-[25px] h-[25px] mt-2 mb-2 mr-2" alt="youtube img"/>
                <h6 className="mt-2 mb-2 font-[100] text-[14px]">App Guide Video</h6>
              </div>
              <div className="w-3/4 bg-white border border-white rounded-lg mt-4">
                <h4 className="ml-8 mt-4 text-[22px] mb-2">Practice Mock Tests</h4>
                <h6 className="ml-8 ">Get the authentic IELTS exam experience with all four modules covered!</h6>
                <button className=" ml-8 mt-4 mb-6 w-3/4 bg-blue-700 text-white border border-blue-700 rounded-[16px] text-center pt-1 pb-1">Start</button>
              </div>

            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Home