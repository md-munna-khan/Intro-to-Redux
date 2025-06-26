

import { useDispatch } from 'react-redux';
import './App.css'
import { decrement, increment } from './redux/features/counter/counterSlice';


function App() {
 const dispatch = useDispatch();
 const handleIncrement =()=>{
  dispatch(increment());
 }
 const handleDecrement =()=>{
  dispatch(decrement());
 }

  return (
   <div>
    <div>Counter With Redux</div>
    <button onClick={handleIncrement}>Increment</button>
    <div>0</div>
    <button onClick={handleDecrement}>Decrement</button>
   </div>
  )
}

export default App
