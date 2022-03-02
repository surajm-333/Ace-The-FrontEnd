import React, { useState , useEffect} from 'react'
import axios from 'axios'
import Contest from './Contest';

import { motion } from "framer-motion";
function Home() {
  
  const [data,setData] = useState([]);
  const [filter,setFilter] = useState([])
  const [searchTerm,setSearchTerm] = useState('');

  
  let content = null;

  const url = "https://kontests.net/api/v1/all"
  
  useEffect(() => {
    
    axios.get(url).then((response) => {
      setData(response.data)    
      setFilter(response.data)  
    })
  
    
  }, [url])

  useEffect(() => {
    if(searchTerm === 'All'){
      setFilter(data)
      return;
    }
    const filteredData = data.filter((kontest) => kontest.site.toLowerCase().includes(searchTerm.toLowerCase()))
    setFilter(filteredData);
  },[data, searchTerm])

  if(data){

    
    
    content = 
     <div>       

        <div className='grid grid-cols-3 sm:grid-cols-8 text-xs sm:text-base text-purple flex gap-4 justify-center items-center py-6'>
          <button className=' bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full' onClick={() => setSearchTerm("All")}>All</button>
          <button className=' bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full' onClick={() => setSearchTerm("Leetcode")}>Leetcode</button>
          <button className=' bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full' onClick={() => setSearchTerm("Codechef")}>Codechef</button>
          <button className=' bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full' onClick={() => setSearchTerm("Codeforces")}>Codeforces</button>
          <button className=' bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full' onClick={() => setSearchTerm("AtCoder")}>AtCoder</button>
          <button className=' bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full' onClick={() => setSearchTerm("Kick Start")}>Kick Start</button>
          <button className=' bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full' onClick={() => setSearchTerm("HackerRank")}>HackerRank</button>
          <button className=' bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded-full' onClick={() => setSearchTerm("HackerEarth")}>HackerEarth</button>
        </div>

       
        <motion.div layout className='grid grid-cols-1 lg:grid-cols-3 flex justify-center items-center gap-16 rounded'>
          {
              filter.map((kontest) => { 
                return <Contest info={kontest} />
              })
          }        
        </motion.div>       
     </div>
     
  }
  

  return (
    <div className='bg-cyan-50 mx-3 py-2 px-2 flex justify-center align-center'>
        <div>
          {content}
        </div>     
    </div>
  )
}

export default Home