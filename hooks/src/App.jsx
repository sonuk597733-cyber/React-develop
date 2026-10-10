// useState - state ko manage karne ke liye.

// useEffect - side effects handle karne ke liye
// (jaise API call, DOM manipulation, event
// listener).

// useContext - global state ko consume karne ke
// liye without prop drilling.

// useReducer - complex state management ke liye
// (Redux jaisa chhota version).

// useRef - mutable values hold karne ke liye jo re-
// render trigger na karein, ya DOM access karne ke
// liye.

// useMemo & useCallback - optimization ke liye,
// unnecessary re-renders avoid karne ke liye.



import React, { useState } from 'react'

const App = () => {
const [num,setNum] = useState(0)
  function increase(){
   setNum(num+1)
  }
  function Decrease(){
    setNum(num-1)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default App
