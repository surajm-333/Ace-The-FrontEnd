import React from 'react'

function Navbar() {
  return (
    <div className='shadow pt-4 pb-4 flex flex-col sm:flex-row justify-center items-center gap-x-96  ' >
      <h1 className='text-4xl font-bold flex justify-center  font-space tracking-widest'>
        &lt;CODEKARO&#47;&gt;
      </h1>
      <div className='flex gap-6 font-space'>
        Made with ❤️ By Abhishek
      </div>
    </div>
  )
}

export default Navbar