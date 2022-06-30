import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {getPoducts,productSelector,updateProduct} from '../features/productSilce'
import {useParams,useNavigate} from 'react-router-dom'

const EditProduct = () => {

    const [title,setTitle] = useState("")
    const [price,setPrice] = useState("")
    console.log(title,price);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams()

    const product = useSelector((state)=>productSelector.selectById(state,id))

    useEffect(()=>{
        dispatch(getPoducts())
    },[dispatch])

    useEffect(()=>{
        if(product){
            setTitle(product.title)
            setPrice(product.price)
        }
    },[dispatch])
    
    const handleUpdate = async (e)=>{
        e.preventDefault()
        await dispatch(updateProduct({id,title,price}))
        navigate('/')
    }

  return (
    <div className='border shadow-xl w-3/4 mx-auto py-3 px-3 rounded-xl'>
        <form onSubmit={handleUpdate}>
            <h2 className='mb-5 text-2xl font-bold'>Edit Product</h2>
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
                <button type='submit' className='bg-sky-600 px-4 py-1 rounded-lg mt-5 font-bold text-white'>Edit Product</button>
            </div>
        </form>
    </div>
  )
}

export default EditProduct