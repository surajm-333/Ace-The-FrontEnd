import React from 'react'
import moment from 'moment'
import {motion} from 'framer-motion'
function Contest({info}) {
  return (
    <motion.div layout>
        <div className='max-w-sm shadow-md rounded overflow-hidden bg-green-50 dark:bg-slate-900 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-103 hover:bg-indigo-500 duration-300 cursor-pointer'>
            <div layout className='px-6'>
                    <div className='px-6 py-6'>
                        <div className='font-mono text-xl mb-3 dark:text-white font-bold tracking-widest'>{info.name}</div>
                    </div>
                    <div className='text-white text-sm sm:text-base mx-4 mb-2 bg-slate-500 rounded-full px-2 py-1 w-1/3 text-center'>
                      <p>#{info.site}</p>
                    </div>
                      
                    <div className='flex flex-col px-6 py-0 gap-1 '>
                        <p className='font-bitter text-lg text-slate-400 tracking-wider'>DATE:</p>
                        <p className='font-mono text-white text-sm tracking-wider'>{moment(info.start_time).format("DD/MM/YYYY")} - {moment(info.end_time).format("DD/MM/YYYY")}</p>
                        <p className='font-bitter text-lg text-slate-400 tracking-wider'>TIMINGS:</p>
                        <p className='font-mono text-white text-sm tracking-wider'>{moment(info.start_time).format("hh:mm a")} - {moment(info.end_time).format("hh:mm a")}</p>
                    </div>

                    <div className='py-6 px-6 flex justify-center'>
                        <a href={info.url}><button className='tracking-wider bg-transparent hover:bg-green-400 text-white font-mono hover:text-white-700 py-2 px-4 border border-white-500 hover:border-transparent rounded '>Go To Contest</button></a>
                    </div>
              </div>
         </div>
    </motion.div>
  )
}

export default Contest