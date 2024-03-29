import AdTarget from './AdTarget';
import Graph from './Graph';

const HomeGraph = () => {
   
  return (
    <div className="bg-white  w-1/2 border rounded border-white">
      <div className="ml-3 mt-2 mr-3">
        <AdTarget />
        <div>
          <Graph width={500} height={200} />
        </div>
      </div>

    </div>
  )
}

export default HomeGraph