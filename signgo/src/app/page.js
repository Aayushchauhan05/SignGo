import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faTools, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Heading */}
          <h1 className="text-white text-2xl font-bold">Learning Hub For the Deaf</h1>
          {/* Navigation Links */}
          <div className="flex space-x-4">
            <a href="#" className="text-white text-xl font-semibold">Home</a>
            <a href="#" className="text-white text-xl font-semibold">Learning</a>
            <a href="#" className="text-white text-xl font-semibold">Tool</a>
            <a href="#" className="text-white text-xl font-semibold">Profile</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-8 flex-1">
        {/* First Row of Cards */}
        <div className="grid grid-cols-4 gap-6 justify-items-center">
          {/* Card 1 */}
          <div className="bg-white h-2 w-56 rounded-lg shadow-md w-44 h-auto">
            <img
              src=".\dora.1.jpeg"
              alt="Image 1"
              className="rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-gray-700 text-center">writing work</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-0 rounded-lg shadow-md w-36 h-auto">
            <img
              src=".\dora.2.jpeg"
              alt="Image 2"
              className="rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-gray-700 text-center">maths assignment</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-0 rounded-lg shadow-md w-36 h-auto">
            <img
              src=".\dora.3.jpeg"
              alt="Image 3"
              className="rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-gray-700 text-center">science tutorials</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-0 rounded-lg shadow-md w-36 h-auto">
            <img
              src=".\dora.4.jpeg"
              alt="Image 4"
              className="rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-gray-700 text-center">work and sentences</p>
            </div>
          </div>
        </div>

        {/* Second Row of Cards */}
        <div className="grid grid-cols-2 gap-6 mt-6 justify-items-center">
          {/* Card 5 */}
          <div className="bg-white p-0 rounded-lg shadow-md w-64 h-auto">
            <img
              src=".\dora.7.jpeg"
              alt="Image 5"
              className="rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-gray-700 text-center">Text-to-sign</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-0 rounded-lg shadow-md w-64 h-auto">
            <img
              src=".\dora.6.jpeg"
              alt="Image 6"
              className="rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-gray-700 text-center">Sign-to-speech</p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-start mt-8">
          <a href="#" className="bg-black text-white py-2 px-11 rounded-lg shadow-md hover:bg-gray-800 transition duration-300">
            Get Started
          </a>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bg-gray-800 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-around">
          <a href="#" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faHome} className="text-lg  h-5 mb-1" />
            <span className="text-sm">Home</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faBook} className="text-lg h-5 mb-1" />
            <span className="text-sm">Learning</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faTools} className="text-lg h-5 mb-1" />
            <span className="text-sm">Tool</span>
          </a>
          <a href="#" className="flex flex-col items-center">
            <FontAwesomeIcon icon={faUser} className="text-lg h-5 mb-1" />
            <span className="text-sm">Profile</span>
          </a>
        </div>
      </nav>
    </div>
  );
}
