import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import howTo from './assets/Wavy_Bus-22_Single-03.jpg'
import { AcademicCapIcon, MagnifyingGlassCircleIcon, NewspaperIcon, ShieldCheckIcon } from '@heroicons/react/16/solid'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await fetch('https://natalis3405-jobmatcher.hf.space/upload-cv', {
        method: 'POST',
        body: formData
      });
      
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(`HTTP ${res.status}: ${msg}`);
      }

      const data = await res.json();
      console.log('Parsed resume:', data);
    } catch (err) {
      console.error('Upload error:', err);
      alert('Resume upload failed. Try again.');
    }
  }

  return (
    <>
      <header className='flex p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg'>
        Job Matcher AI
      </header>


      <div className='flex flex-col min-h-screen'>
        <div className='flex items-center py-16 px-4 justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
          <div className='flex flex-col items-center py-9'>
            <h1 className="text-3xl font-bold mb-4 antialiased text-white text-center">
              Get personalized job recommendations with AI
            </h1>
            <h4 className="text-lg mb-6 text-white">
              UPLOAD YOUR RESUME
            </h4>
            <input type='file' onChange={handleFileUpload} className="hidden" id="resume-upload" />
            <label htmlFor="resume-upload" className="p-4 rounded bg-red-500 hover:bg-red-700 text-white cursor-pointer">
              <NewspaperIcon className='h-6 w-6 text-red-500 inline-block text-white mr-2' />
              SELECT RESUME
            </label>
          </div>
        </div>


        <div className='flex max-w-7xl mx-auto'>
          <div className='flex items-stretch justify-center flex-row flex-wrap py-16 gap-4 px-4'>
              <div className='basis-full text-center py-8 font-bold text-[2rem]'>
              WHY CHOOSE US?
            </div>
            <div className='basis-full sm:basis-1/4 sm:flex-1 py-6 px-4 bg-gray-50 rounded-lg shadow-md min-h-[280px] flex flex-col'>
              <div className='flex flex-col items-center flex-1'>
                <AcademicCapIcon className='h-14 w-14 text-red-500' />
                <span className='font-bold text-lg'>Resume Parser</span>
                <ul className='mt-4 flex-1 space-y-2'>
                  <li>Scans resume file</li>
                  <li>Extracts relevant data</li>
                  <li>Parses work experience</li>
                </ul>
              </div>
            </div>
            <div className='basis-full sm:basis-1/4 sm:flex-1 py-6 px-4 bg-gray-50 rounded-lg shadow-md min-h-[280px] flex flex-col'>
              <div className='flex flex-col items-center flex-1'>
                <MagnifyingGlassCircleIcon className='h-14 w-14 text-red-500' />
                <span className='font-bold text-lg'>AI Deep Search</span>
                <ul className='mt-4 flex-1 space-y-2'>
                  <li>Utilizes advanced algorithms</li>
                  <li>Finds hidden job opportunities</li>
                  <li>Matches skills with job requirements</li>
                </ul>
              </div>
            </div>
            <div className='basis-full sm:basis-1/4 sm:flex-1 py-6 px-4 bg-gray-50 rounded-lg shadow-md min-h-[280px] flex flex-col'>
              <div className='flex flex-col items-center flex-1'>
                <ShieldCheckIcon className='h-14 w-14 text-red-500' />
                <span className='font-bold text-lg'>Safe search</span>
                <ul className='mt-4 flex-1 space-y-2'>
                  <li>Secure data handling</li>
                  <li>No data farming</li>
                  <li>Privacy-focused job matching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>


        <div className="flex max-w-7xl mx-auto">
          <div className="flex flex-row flex-wrap py-16 px-4">
            <div className="flex items-center justify-center py-4 sm:py-16 px-4 basis-full sm:basis-1/2">
              <img src={howTo} className="h-[15rem] sm:h-[20rem]" alt="How to use Job Matcher AI" />
            </div>
            <div className="flex flex-col items-center basis-full sm:basis-1/2 py-16 px-4">
              <div className='font-bold text-[2rem]'>
                <h1>How to use Job Matcher AI</h1>
              </div>
              <div>
                <ol className='list-decimal text-lg space-y-6'>
                  <li className='mt-8'>Upload your resume</li>
                  <li>Let the AI analyze your skills</li>
                  <li>Receive personalized job recommendations</li>
                  <li>Apply to jobs directly through the platform</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

      </div>

      <footer className="px-4 py-6 bg-gray-200">
        <div className='flex sm:flex-row flex-col gap-4'>
          <div>Privacy Notice</div>
          <div>Terms and Conditions</div>
          <div>Contact us</div>
        </div>
        <div className='flex mt-4'>© 2025 Brand. All rights reserved</div>
        <div className='flex mt-4'>For Testing Purposes Only.</div>
      </footer>
    </>
  )
}

export default App
