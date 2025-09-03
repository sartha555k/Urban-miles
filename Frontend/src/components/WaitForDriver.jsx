import React from 'react'

function waitForDriver(props) {
  return (
     <div>
      <h3
        onClick={() => {
          props.waitForDriver(false);
        }}
        className="pb-2 top-0 text-center absolute w-[93%]"
      >
        <i className=" text-gray-700 ri-arrow-down-wide-fill"></i>
      </h3>
      <div className='flex items-center justify-between'>
        <img
          className=" h-15"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Sarthak</h2>
          <h4 className='text-xl font-semibold -mt-1'>MP04 ap 1234</h4>
          <p className='text-sm text-gray-600'>audi 123</p>
        </div>
      </div>


      <div className="flex justify-center flex-col items-center gap-2">
        <div className="w-full">
          <div className="flex items-center gap-4 p-3 border-b-1">
            <i className="text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className="text-lg font-medium ">122/A</h3>
              <p className="text-base -mt-1">vijay nangar , Indore</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 p-3 border-b-1">
              <i className="ri-map-pin-2-line"></i>
              <div>
                <h3 className="text-lg font-medium">122/A</h3>
                <p className="text-base -mt-1">vijay nangar , Indore</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 p-3">
              <i className=" text-lg ri-money-rupee-circle-line"></i>
              <div>
                <h3 className="text-lg font-medium">99rs.</h3>
                <p className="text-base -mt-1">cash/online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default waitForDriver