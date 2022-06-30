import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {update} from '../features/productSilce'
import { addProduct } from '../features/productSilce'
import {useNavigate} from 'react-router-dom'

const AddProduct = () => {

    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    console.log(title,price);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await dispatch(addProduct({title,price}))
        navigate('/')
    }

  return (
    <div className='border shadow-xl w-3/4 mx-auto py-3 px-3 rounded-xl'>
        <form onSubmit={handleSubmit}>
            <h2 className='mb-5 text-2xl font-bold'>Add Product</h2>
            <div>
                <label className='mb-3' >
                    <span >Title</span>
                <input className='w-full bg-slate-200 rounded-md pl-3 mb-4 py-1' type="text" 
                placeholder='title' value={title} 
                onChange={(e)=>setTitle(e.target.value)}/>
                </label>
            </div>
            <div>
                <label className='mb-3' >
                    <span >Price</span>
                <input className='w-full bg-slate-200 rounded-md pl-3 py-1' type="text" 
                placeholder='Price' 
                value={price} 
                onChange={(e)=>setPrice(e.target.value)}/>
                </label>
            </div>
            <div>
                <button type='submit' className='bg-sky-600 px-4 py-1 rounded-lg mt-5 font-bold text-white'>Add Product</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct