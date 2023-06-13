import React from 'react'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';


const TodoList = ({ task, editingStatus, handleDelete, }) => {


    return (
        <li className='w-[80%] h-auto  mx-auto  px-2 list-none flex justify-between itetext-4xl bg-blue' key={task.id}>
            {task.value}
            <div className="flex">
                <FaEdit className='text-2xl text-white-600'
                 //this will set status of isEditing true so that editinput component run and update value
                 onClick={() => editingStatus(task.id)}
                />
                <MdDelete className='text-2xl text-white-600'
                    onClick={() => handleDelete(task.id)}
                />
            </div>
        </li>
    )
}

export default TodoList;