
import SideBar from "./SideBar"
import TopBar from "./TopBar"
import Home from "./Home"
import ProfileBar from "./ProfileBar"
import BottomNavigation from "./BottomNavigation"
import MobileTopBar from "./MobileTopBar"

const MainContainer = () => {
  return (
    <div className="font-sans">
        <TopBar/>
        <MobileTopBar/>
        <div className="flex flex-row w-full flex-wrap">
          <SideBar/>
          <div className="w-4/5 ml-4 sm:ml-[154px]  lg:ml-72">
              <ProfileBar/>
              <Home/>
          </div>
          
        </div>
        <BottomNavigation/>
    </div>
  )
}

export default MainContainer