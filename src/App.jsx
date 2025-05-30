import React from 'react'
import WordCharacterCounter from './WordCharacterCounter'
import './App.css'

function App() {

  return (
    <>
      <div className="flex flex-col items-center bg-gray-200 w-screen h-screen">
        <div className="bg-white w-screen text-center py-2">
          <h1 className="text-[27px] my-5 text-black font-sans">
            Word Counter
          </h1>
        </div>
        <WordCharacterCounter />
      </div>
    </>
  )
}

export default App
