

const MobileTopBar = () => {
  return (
    <div className=" bg-gradient-to-b from-blue-600 to-blue-900 sm:hidden">
        <div className="flex flex-row justify-between items-center pt-4 pb-4 pl-4 pr-4">
            <img src="Frame 48096367.png" className="w-8 h-8"/>
            <div className="text-white">Home</div>
            <img src="Frame 196.png" className="w-8 h-8"/>
        </div>
        <div className="flex flex-row justify-center mt-1 ">
              <div className="flex flex-row border border-blue-600  bg-blue-600 rounded-[32px] p-1 mb-4 ">
                  <button className="text-white p-1"> IELTS |</button>
                  <button className="text-white p-1" > PTE | </button>
                  <button className="text-white p-1" > TOEFL</button>
              </div>
          </div>

    </div>

  )
}

export default MobileTopBar