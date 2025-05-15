import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {

  const [color, setColor] = useState('olive')
  useEffect(() => {
    document.body.style.backgroundColor = color
  }, [color]) // This will run whenever the color changes

  

  return (
    <div className='w-full h-screen duration-300 ' style={{  backgroundColor: color }}> 
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 roundex-3xl'>
          <button className='bg-red-500 text-white px-4 py-2 rounded-lg' onClick={() => setColor('red')}>Red</button>
          <button className='bg-green-500 text-white px-4 py-2 rounded-lg' onClick={() => setColor('green')}>Green</button>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={() => setColor('blue')}>Blue</button>
          <button className='bg-yellow-500 text-white px-4 py-2 rounded-lg' onClick={() => setColor('yellow')}>Yellow</button>
          <button className='bg-purple-500 text-white px-4 py-2 rounded-lg' onClick={() => setColor('purple')}>Purple</button>
          <button className='bg-pink-500 text-white px-4 py-2 rounded-lg' onClick={() => setColor('pink')}>Pink</button>
        </div>
      </div>
      
    </div>
  )
}

export default App
