import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getPoducts, productSelector,delateProduct } from '../features/productSilce'
import {useNavigate} from 'react-router-dom'

const ShowProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const products = useSelector(productSelector.selectAll)

    useEffect(()=>{
      dispatch(getPoducts())
    },[dispatch])
  return (
    <div className='w-3/4 mx-auto'>
      <div>
         <button onClick={()=> navigate("/addProduct")} className="bg-sky-500 rounded-lg mb-3 px-3 py-2 font-bold text-white">Add Product</button>
      </div>
         <table className='table-auto border border-collapse w-full mx-auto shadow-lg '>
          <thead className='border bg-slate-100'>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='border'>
            {products.map((product,index)=>(
            <tr className='border' key={index}>
              <td className='pl-3'>{index + 1}</td>
              <td className='pl-3'>{product.title}</td>
              <td className='pl-3'>{product.price}</td>
              <td className='py-2 pl-3 flex justify-center'>
                <div>
                  <button className='bg-sky-600 rounded-lg px-5 py-0 font-bold mr-3 text-white'
                  onClick={()=>navigate(`/editProduct/${product.id}`)}>Edit</button>
                </div>
                <div>
                  <button onClick={()=> dispatch(delateProduct(product.id))} className='bg-red-400 rounded-lg px-5 py-0 font-bold text-white'>Hapus</button>
                </div>
              </td>
            </tr>
            ))}
          </tbody>
         </table>
    </div>
  )
}

export default ShowProduct