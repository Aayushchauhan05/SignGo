import Image from 'next/image';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome, faBook, faTools, faUser } from '@fortawesome/free-solid-svg-icons';


export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
     

      {/* Main Content */}
      <div className='w-[56%] mx-auto'>

        <div className='relative top-16 left-[75px]'>
          <h1 className='font-bold text-xl'>
            Learning Hub for the Deaf !
          </h1>
        </div>

      <div className="container mx-auto p-20 flex-1">
        {/* First Row of Cards */}
        <div className="flex flex-row flex-wrap justify-between">
          {/* Card 1 */}
          <div >
            <div className='bg-white   shadow-md  '>
            <img
              src=".\h1.jpg"
              alt="Image 1"
              className="rounded-lg shadow-md"
              loading='lazy'
              height={108}
              width={128}
              
            />
             </div>
            <div className="p-1 ">
              <p className="text-gray-700 relative right-1 font-medium">writing work</p>
            </div>

           
          </div>

          {/* Card 2 */}
          <div >
            <div className='bg-white    shadow-md  '>
            <img
              src=".\h2.jpg"
              alt="Image 1"
              className="rounded-lg bg-cover shadow-md"
              loading='lazy'
              height={108}
              width={128}
              
            />
             </div>
            <div className="p-1 ">
              <p className="text-gray-700 relative right-0.5 font-medium">Maths Exercise</p>
            </div>

           
          </div>

          {/* Card 3 */}
          <div >
            <div className='bg-white   shadow-md  '>
            <img
              src=".\h3.jpg"
              alt="Image 1"
              className="rounded-lg shadow-md"
              loading='lazy'
              height={108}
              width={128}
              
            />
             </div>
            <div className="p-1 ">
              <p className="text-gray-700 relative right-0.5 font-medium">Science Tutorial</p>
            </div>

           
          </div>
          {/* Card 4 */}
          <div >
            <div className='bg-white   shadow-md  '>
            <img
              src=".\h4.jpg"
              alt="Image 1"
              className="rounded-lg shadow-md"
              loading='lazy'
              height={108}
              width={128}
              
            />
             </div>
            <div className="p-1 ">
              <p className="text-gray-700 relative right-0.5 font-medium">Words</p>
            </div>

           
          </div>
        </div>




          <div className='pt-10 pb-4' >
            <h1 className='font-bold text-xl'>
              Tools
            </h1>
          </div>

        {/* Second Row of Cards */}
        <div className="flex flex-row flex-wrap justify-between">
          {/* Card 5 */}
          <div className="bg-white   ">
            <img
              src=".\h5.jpg"
              alt="Image 5"
              className="h-[150px]  w-[170px] rounded-lg shadow-md"
          
            />
            <div className="p-1">
              <p className="text-gray-700 relative font-medium ">Text-to-sign</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white   ">
            <img
              src=".\h6.jpg"
              alt="Image 5"
              className="h-[150px]  w-[170px] shadow-md rounded-lg"
          
            />
            <div className="p-1">
              <p className="text-gray-700 relative  font-medium">Sign-to-speech</p>
            </div>
          </div>
          {/* card 7 */}
          <div className="bg-white   ">
            <img
              src=".\h6.jpg"
              alt="Image 5"
              className="h-[150px]  w-[170px] rounded-lg shadow-md"
          
            />
            <div className="p-1">
              <p className="text-gray-700 relative font-medium ">Conversion tool</p>
            </div>
          </div>




        </div>


      
      

        {/* Button */}
        <div className="flex justify-start mt-8">
          <a href="#" className="bg-[#000000] text-[#fff] py-2 px-11 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
            Get Started
          </a>
        </div>
      </div>

      </div>

      {/* Bottom Navbar */}
      <nav className=" text-white   mb-1 bg-[#f1f5f9]  ">
        <div className='h-[2px] w-full bg-[#f3f4f6] '></div>
        <div className="container mx-auto flex pt-4 justify-around">
          <a href="#" className="flex flex-col items-center">
            {/* <FontAwesomeIcon icon={faHome} className="text-lg  h-5 mb-1" /> */}
            <span className="text-sm">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            {/* <FontAwesomeIcon icon={faBook} className="text-lg h-5 mb-1" /> */}
            <span className="text-sm">Learning</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            {/* <FontAwesomeIcon icon={faTools} className="text-lg h-5 mb-1" /> */}
            <span className="text-sm">Tool</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            {/* <FontAwesomeIcon icon={faUser} className="text-lg h-5 mb-1" /> */}
            <span className="text-sm">Profile</span>
          </a>
        </div>
      </nav>

    
    </div>
  );
}
