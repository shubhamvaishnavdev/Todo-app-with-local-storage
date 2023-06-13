import React, { useState, useEffect } from 'react'
import InputForm from './components/InputForm';
import TodoList from './components/TodoList';
import EditInput from './components/EditInput'


const App = () => {
  const [datalist, setDatalist] = useState([]); //array of all todos
  const [input, setInput] = useState(''); //single todo

  //When the page reloads local storage values are set in datalist so data will not be lost  
  useEffect(() => {
    if (localStorage.getItem("localKey")) {
      const localData = JSON.parse(localStorage.getItem("localKey"));
      setDatalist(localData);
    }
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      const newItem = {
        id: new Date().getTime().toString(),
        value: input,
        completed: false,
        isEditing: false
      };
      setDatalist([...datalist, newItem]);
      localStorage.setItem("localKey", JSON.stringify([...datalist, newItem])); // add values in local storage
      setInput('');
    } else {
      alert("please add information");
    }
  };

  // toggle editing status so that editinput component run
  const editingStatus = (id) => {
    setDatalist(
      datalist.map((datas) => (
        datas.id === id ? { ...datas, isEditing: !datas.isEditing } : datas)));
  };

  // this will get value from edit input form and update array with new value
  const handleUpdate = (value, id) => {
    const updatedData = datalist.map((newData) => newData.id === id ? { ...newData, value, isEditing: !newData.isEditing } : newData)
    setDatalist(updatedData);
    localStorage.setItem("localKey", JSON.stringify(updatedData));
  };

  const handleDelete = (id) => {
    const updatedList = datalist.filter(item => item.id !== id);
    setDatalist(updatedList);
    localStorage.setItem("localKey", JSON.stringify(updatedList));
  };

  const handleClear = () => {
    setDatalist([]);
    localStorage.removeItem("localKey");
  };


  return (
    <div className='w-[100vw] bg-black text-white h-screen flex flex-col items-center  '>
      <p className='inline text-3xl font-bold pt-4 '>ToDO list</p>
      <InputForm handleAdd={handleAdd} input={input} setInput={setInput} />
      <p className='text-lg'> there are {datalist.length} tasks </p>
      <div className="w-full h-auto mt-4  flex flex-col flex-wrap justify-center gap-2 no-underline ">
        {
          datalist.map((items,index) => (
            items.isEditing ?
              (<EditInput handleUpdate={handleUpdate} items={items}  key={index} />) :
              (
                <TodoList
                key={index}
                  task={items}
                  datalist={datalist}
                  handleDelete={handleDelete}
                  editingStatus={editingStatus}
                />
              )))
        }
      </div>

      <button onClick={handleClear} className=' mx-auto px-[8px] py-[4px]] mt-4 w-auto  text-lg font-semibold bg-red-600'>Clear list</button>
    </div>
  )
}

export default App;
