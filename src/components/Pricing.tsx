
const Pricing = () => {
  return (
    <div className="pb-8">
        <h1 className="text-center text-white mb-[2rem] text-4xl font-bold ">Pricing</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center place-items-center   *:text-center *:p-[4rem]  *:h-[50vh] justify-center  text-white *:border-2  *:rounded-lg  ">
      <div className="">
        <h1 className="mb-6  font-mono ">Free trial</h1>
        <ul className="space-y-2 font-thin">
            <li>1 Week</li>
            <li>No Ads</li>
            <li>50k Mouvies</li>
            <li>50k series</li>
        </ul>
        <button className="mt-[4rem] ">Get This</button>
      </div>
      <div className="">
        <h1 className="mb-6  font-mono ">Basic</h1>
        <ul className="space-y-2 font-thin">
            <li>1 Month</li>
            <li>No Ads</li>
            <li>500k Mouvies</li>
            <li>500k series</li>
        </ul>
        <button className="mt-[4rem] ">Get This</button>
      </div>
      <div className="">
        <h1 className="mb-6  font-mono ">Premium</h1>
        <ul className="space-y-2 font-thin">
            <li>1 Year</li>
            <li>No Ads</li>
            <li>1m Mouvies</li>
            <li>1m series</li>
        </ul>
        <button className="mt-[4rem]  hover: bg-red-800 ">Get This</button>
      </div>
      
    </div>
    </div>
    
  )
}

export default Pricing
