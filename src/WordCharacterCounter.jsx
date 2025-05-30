import React, { useState } from 'react'

function WordCharacterCounter() {
  const [text, setText] = useState("");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const characterCount = text.length;
  
  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="max-w-[800px] w-full p-2.5 h-[500px] mb-2.5 border border-gray-300 rounded-[5px] text-[25px] bg-white mt-10 mx-auto">
     <div className='flex justify-between text-sm text-black pb-1'>
        <span>Words: {wordCount}</span>
        <span>Characters: {characterCount}</span>
     </div>

     <div className='border-t border-gray-200 mb-2'></div>
      
      <div className="h-[450px] overflow-auto">
       <textarea 
        placeholder="Type your text here"
        onChange={handleTextChange}
        value={text}
        className="w-full h-full p-2 text-[15px] bg-transparent border-none outline-none resize-none"
        wrap='soft'
      />
     </div>
    </div>
  )
}

export default WordCharacterCounter;
