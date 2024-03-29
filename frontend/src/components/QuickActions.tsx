

const QuickActions = () => {
  return (
    <div className="sm:hidden w-[90%] mx-auto mb-2">
        <h6 className="text-gray-600 font-[200] text-[24px] mb-3">
            Quick Actions
        </h6>
        <div className=" flex flex-row flex-wrap justify-around ">
            <div className="w-[1/2] flex flex-row items-center bg-white  border border-gray-300 py-3  rounded-[8px]">
                <img src="/youtube (8) 1.png" className="w-[20px] h[20px] ml-2 mr-2"/>
                <h6 className="mr-2">App Guide Video </h6>
            </div>

            <div className=" w-[1/2]  flex flex-row items-center bg-white  border border-gray-300 py-3  rounded-[8px]">
                <img src="/whatsapp (9) 1.png" className="w-[20px] h[20px] ml-2 mr-2"/>
                <h6 className="mr-2">Help & Support</h6>
            </div>
        </div>
    </div>
  )
}

export default QuickActions