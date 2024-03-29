import AdTarget from "./AdTarget"
import Graph from "./Graph"



const GraphMobileView = () => {
  return (
    <div className="sm:hidden bg-white flex flex-col border  border-gray-200 rounded-lg w-[90%] mx-auto  mb-2">

        <h6 className="pl-4 text-2xl font-[500] pt-4 pb-4 text-[15px] "> Your Progress Summary </h6>
        <div className="ml-4">
            <Graph width={300} height={200}  />
        </div>
        
        <AdTarget/>
        

    </div>
  )
}

export default GraphMobileView