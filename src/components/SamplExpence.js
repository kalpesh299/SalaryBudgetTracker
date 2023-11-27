import React, {useState} from 'react'
import { useExpense } from '../context/ExpenseContext'

export const SamplExpence = () => {
    const {state,dispatch}=useExpense();
    const [amount,setAmount]=useState(0);
    const [description,setDesc]=useState("")

const HandleSubmit =()=>{
    
    dispatch({
        type:"ADD_EXPENSE",
        payload:{
            description,
            amount
        }}
        
        )

        setAmount(0) 
        setDesc("");
}

const deletHandle=(id)=>{
console.log(id)
dispatch({type:"DELETE_EXPENSE",payload:id})
}
  return (
    <div className='flex flex-col items-center'>
<h1 className='font-bold text-black text-4xl p-4'>Salary Budget Tracker</h1>
<div className='flex flex-col md:flex-row w-screen justify-evenly p-4 bg-gray-300'  >
<h1 className='bg-green-600 mt-2 p-4 text-center text-white text-xl font-bold rounded-xl'>Total:{state.total}</h1>
      <h1 className='bg-yellow-600 mt-2 text-center p-4 text-white  text-xl  font-bold rounded-xl'>Bal:{state.bal}</h1>
      <h1 className='bg-red-600 mt-2 p-4 text-center text-white  text-xl  font-bold rounded-xl'>Spend:{state.spend}</h1>
</div>
<h1 className='text-center text-xl font-bold p-3 md:text-3xl text-blue-500'>EXPENSE LIST WILL BE SHOW HERE</h1>
        {
            state.expenses.map((el,index)=>{
                return(<div key={el.id} className='flex flex-col md:flex-row w-2/4 justify-evenly mt-4'>
                    <h1 className='text-2xl text-center font-bold'>{index+1})Description:<span className='text-red-600'>{el.description}</span></h1>
                    <h1 className='text-2xl text-center font-bold'>Amount:<span className='text-red-600'>{el.amount}</span></h1>
                    <button className='p-3 text-white font-bold bg-red-600 rounded'  onClick={()=>deletHandle(el.id)}>Delete</button>
                    </div>
                ) 
            })
        }

      
      <div className='p-4'>
        <div className='flex flex-col'><label className='font-bold text-xl'>Description</label>
        <input className='border-2 border-gray-200 p-2' value={description} onChange={(e)=>setDesc(e.target.value)} /></div>
      <div className='flex flex-col '>
      <label className='font-bold text-xl'>Amount</label>
        <input className='border-2 border-gray-200  p-2'value={amount} onChange={(e)=>setAmount(e.target.value)}/>
        <button onClick={HandleSubmit} className='bg-blue-500 p-2 mt-2 rounded-lg font-bold text-xl text-white '>SUbmit</button>
      </div>
        
      </div>

           <h1 className='text-center'>Created By KP ❤</h1>

    </div>
  )
}
