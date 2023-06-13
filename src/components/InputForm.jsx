import React from 'react';

const InputForm = ({ handleAdd, input, setInput }) => {


  return (
    <div className=' w-auto'>
      <div className=" w-auto flex flex-col flex-wrap justify-center items-center">

        <div className='flex flex-wrap items-center mt-[3rem] gap-0'>
          <form onSubmit={handleAdd} className='flex justify-center items-center'>
            <input type='text' value={input} placeholder='write your Task' className='relative h-8 px-2  placeholder:pl-4 text-black text-xl focus:outline-none'
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button type='submit' className='px-4 h-8 bg-blue'>add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default InputForm;


