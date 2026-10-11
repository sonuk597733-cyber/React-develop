import { useState } from 'react'
import {Plus} from 'lucide-react'
const Input = ({addTask}) => {
 const [task,setTask] = useState('')
 const handleAdd =()=>{
  if (task.trim() === '') return

addTask(task)
setTask('')
 }
  return (
    <div className='inter flex'>
      <button onClick={handleAdd}
      className='bg-blue-600 text-white'><Plus size={36} strokeWidth={1.75} /></button>

      <input type="text"
       placeholder='Enter Your Tasks'
       value={task}
      onChange={(e)=>setTask(e.target.value)}
       />
    </div>
  )
}

export default Input
