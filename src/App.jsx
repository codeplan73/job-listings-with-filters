import React, { useState } from 'react'
// import JobCard from './components/JobCard'
import jobData from './data.json'

import image from './assets/images/photosnap.svg'

const App = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  console.log(input)
  console.log(list)
  return (
    <>
      <header className="bg-header-mobile md:bg-header-desktop h-20 w-full bg-blend-multiply bg-teal-600"></header>
      <main className="bg-teal-50 flex flex-col">

        <div className='relative placeholder:md:w-5xl container mx-auto py-10 px-6'>

      


          {jobData.map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row md:items-center justify-between my-10 md:my-6 bg-white rounded shadow-xl py-8 px-4 md:p-4 md:w-full relative drop-shadow-xl"
            >
              <div className="flex items-center justify-start gap-3">
                <img src={image} className="absolute -top-6 h-12 w-12 md:top-0 md:relative md:h-20 md:w-20" alt="" />

                <div className='flex flex-col gap-2'>
                  <div className="flex items-center justify-start gap-2">
                    <p className="font-bold md:font-normal text-xs text-teal-600">
                      {job.company}
                    </p>
                    {job.new == true ? (
                      <p className="text-white bg-teal-600 p-1 rounded-full text-xs">
                        NEW
                      </p>
                    ) : (
                      ''
                    )}
                    {job.featured == true ? (
                      <p className="text-white bg-slate-900 p-1 rounded-full text-xs">
                        FEATURED
                      </p>
                    ) : (
                      ''
                    )}
                  </div>

                  <p className='text-sm font-bold'>{job.position}</p>

                  <div className='flex items-center text-xs font-normal text-slate-500'>
                    <p className='flex items-center gap-2'><span>{job.postedAt}</span> {'.'} <span>{job.contract}</span>{'.'}<span> {job.location}</span></p>
                  </div>
                </div>
              </div>

              <hr className=' md:hidden my-4' />

              <div className='flex flex-wrap gap-2 font-bold md:font-normal'>
                <p className='text-xs text-teal-700 bg-green-50 p-2 rounded cursor-pointer'>{job.role}</p>
                {job.tools.map((tool) => (
                  <p className='text-xs text-teal-700 bg-green-50 p-2 rounded cursor-pointer'>{tool}</p>
                ))}
                {job.languages.map((lang) => (
                  <p className='text-xs text-teal-700 bg-green-50 p-2 rounded cursor-pointer' value={input} onClick={(e) => setInput(lang)}>{lang}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export default App
