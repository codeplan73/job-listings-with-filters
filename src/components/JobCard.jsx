import React from 'react'
import jobData from './../data.json'


const JobCard = ({job}) => {

    console.log(job)
    return (
        <div className='flex items-center justify-between bg-white rounded shadow-xl p-4 md:w-full'>
            <div>
                <img src={job.logo} alt="" />
                <div></div>
            </div>

            <div>languages</div>
        </div>
    )
}

export default JobCard


{/* <>
            {
                jobs.map((job) => (
                    <div key={job.id} className='flex items-center justify-between bg-white rounded shadow-xl p-4 md:w-full my-2'>
                        <div>
                            <img src={job.logo} alt="" />
                            <div></div>
                        </div>

                        <div>languages</div>
                    </div>
                ))
            }
        </> */}