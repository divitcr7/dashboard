import { FaHeart } from 'react-icons/fa'; // Import the icon from the library
import { FiChevronDown } from 'react-icons/fi';
import { GoUpload } from "react-icons/go";
import { FaRegArrowAltCircleDown } from "react-icons/fa";



// import { IoChatbubbleEllipses } from 'react-icons/io';

export default function Home() {
  return (
    <>
      <div className="h-[90vh] w-full bg-[#131431]">
        <div className="text-3xl text-white flex justify-between p-2">
          <div>
            Welcome back, Alex!
            <p className="text-sm">You’re doing great this week, Keep it up!</p>
          </div>
          <div>
            {/* <button className="bg-[#d9d9d9]  text-black text-sm py-2 px-4 rounded">
              Find Collaborators
            </button> */}

            
<button
                    type="button"
                    className="bg-[#d9d9d9]   px-3 py-2 text-xs font-medium text-center inline-flex items-center text-black  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                   Find Collaborators
     
 <FaRegArrowAltCircleDown className='ml-2' />



                  </button>
          </div>
        </div>
        <div className="bg-[#242b45] h-[500px] p-3  rounded-xl text-white">
          <div className="w-full border-dashed">
            <div className="border-dashed flex border-zinc-500  rounded-lg p-[70px]">
              <div className="w-full h-[300px]">
                <div className="h-[260px] p-8  flex-col justify-between rounded-xl bg-gradient-to-b from-[#292842] to-[#6866A8] shadow-lg shadow-box">
                  <div>
                    <h1 className="text-2xl text-white">Project Name</h1>
                    <p className="text-white">Last Update: Date</p>
                  </div>

                  <div className="flex justify-between">
                    <div className="w-20 h-20 bg-[#6c6a8e] mt-4 rounded-full flex items-center justify-center">
                      <div className="text-[#bd753c] text-center text-sm">
                        0%
                      </div>
                    </div>
                    <img
                      src="round.png"
                      alt="Logo"
                      className="h-[130px] w-auto"
                    />
                  </div>
                  <div>
                    <p>Project Status</p>
                  </div>
                </div>
                <div className="flex mt-12 g-4">
                  

                  <button
                    type="button"
                    className="bg-[#FF8100]  px-6 py-4 text-xs font-medium text-center inline-flex items-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Create Now
     
 <FaRegArrowAltCircleDown className='ml-2' />



                  </button>

   

                  <div className="w-4"></div>
                  <button
                    type="button"
                    className=" border px-6 py-4 text-xs font-medium text-center inline-flex items-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Learn More
                    <svg
                      className="w-3 h-3 text-white me-2 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="h-[268px] w-[544px] m-2 ml-[50px] rounded-xl bg-[#2b2d43] p-5 text-[#4a4c60]  ">
                <div className="flex flex-col border-b-2 border-[#4a4c60]	">
                  <div className="my-2">$5000</div>
                  <div className="my-2">$4000</div>
                  <div className="my-2">
                    $3000{' '}
                    <span className=" text-[#FF8100] text-2xl pl-[180px]">
                      NO Data...
                    </span>
                  </div>

                  <div className="my-2">$2000</div>
                  <div className="my-2">$1000</div>
                </div>
                {/* <hr className="bg-[#4a4c60] text-[#4a4c60]" style={{ color: '#4a4c60' }} /> */}

                <div className="flex ">
                  <div className="mx-3">Mar</div>
                  <div className="mx-3">Apr</div>
                  <div className="mx-3">May</div>
                  <div className="mx-3">June</div>
                  <div className="mx-3">July</div>
                  <div className="mx-3">August</div>
                  <div className="mx-3">September</div>
                </div>
                <div className="flex  ">
                  <div className=" pr-[50px] my-5 ml-2 h-24 w-32 bg-gradient-to-b from-[#B698DD] to-[#069698] rounded-lg border border-gray-500  items-center justify-center">
                    <p className="text-2xl text-white  pl-2">0</p>
                    <p className="text-sm text-white mt-3 pl-2">
                      Previous Projects
                    </p>
                  </div>
                  <div
                    className="my-5  ml-2 h-24 w-32 bg-gradient-to-b from-[#B698DD] to-[#069698] 
                bg-gray-300 rounded-lg border border-gray-500  items-center justify-center"
                  >
                    <p className="text-2xl text-white  pl-2"> 0</p>
                    <p className="text-sm text-white mt-3 pl-2">
                      Active<br></br> projects
                    </p>
                  </div>
                  <div className="my-5  ml-2  h-24 w-[260px] bg-gradient-to-b from-[#B698DD] to-[#069698] bg- rounded-lg border border-gray-500  items-center justify-center">
                    <p className="text-2xl text-white  pl-2">0</p>
                    <p className="text-sm text-white mt-3 pl-2">
                      Hours spent <br></br> this week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
