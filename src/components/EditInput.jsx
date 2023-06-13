import React, { useState } from 'react'

const EditInput = ({ handleUpdate, items }) => {
  const [info, setInfo] = useState(items.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.trim() !== '') {
      handleUpdate(info, items.id); //send value of updated input and id 
    } else {
      alert("please add information");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center' key={items.id}>
      <input type='text' value={info} placeholder='write your Task' className='relative h-8 px-2  placeholder:pl-4 text-black text-xl focus:outline-none'
        onChange={(e) => setInfo(e.target.value)}
      ></input>
      <button type='submit' className='px-4 h-8 bg-blue-600'>add</button>
    </form>
  )

}

export default EditInput;
