const Dashboard = () => {
  return (
    <>
      <div className="mx-[18%] sm:my-[5%] md:mt-[10%] md:mx-[23%] w-full">
        <div >
         <div className="grid grid-cols-4 grid-rows-2 sm:-ml-10 gap-2 sm:-mt-[3%] mt-[24%] sm:m-0 sm:justify-left ml-12 items-center">
         <div className="w-[400px] h-[250px] bg-gray-300"></div>
          <div className="w-[400px] h-[250px] bg-gray-300"></div>
         </div>
        
          <div className="w-[400px] h-[510px] bg-gray-300 row-span-2"></div>
          <div className="grid grid-cols-4 grid-rows-2 sm:-ml-10 gap-2 sm:-mt-[3%] mt-[24%] sm:m-0 sm:justify-left ml-12 items-center">
          <div className="w-[400px] h-[250px] bg-gray-300"></div>
          <div className="w-[400px] h-[250px] bg-gray-300"></div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
