
import SideBar from "./SideBar"
import TopBar from "./TopBar"
import Home from "./Home"
import ProfileBar from "./ProfileBar"
import BottomNavigation from "./BottomNavigation"
import MobileTopBar from "./MobileTopBar"
import HelpCount from "./HelpCount"
import QuickActions from "./QuickActions"

const MainContainer = () => {
  return (
    <div className="font-sans">
        <TopBar/>
        <MobileTopBar/>
        <div className="flex flex-row w-full flex-wrap bg-gray-100">
          <SideBar/>
          <HelpCount/>
          <div className=" w-full sm:w-4/5  sm:ml-[154px]  lg:ml-72">
              <ProfileBar/>
              
              <Home/>
          </div>
          <QuickActions />
          <div className="sm:hidden w-[350px] h-[260px] mx-auto relative mb-4 ">
              <img src="/Frame 427319170.png" alt="side image" className="w-full h-full" />
              <div className="absolute w-1/2 top-8 right-0 text-white ">
                <div className="text-3xl font-thin ">One Share can many lives</div>
                <div className="font-[100] text-[14px] text-gray-400"> Your one share can unlock a world of education for unprivileged</div>
                <button className="border bg-white border-white text-black w-[120px] rounded-[12px] mt-3">Share App</button>
              </div>
              
            </div>
          <BottomNavigation/>
          
        </div>
        
    </div>
  )
}

export default MainContainer