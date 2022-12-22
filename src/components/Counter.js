import { useState, useEffect } from "react";

export default function Counter(props){
    const [count, setCount] = useState (0)
    let name = props.name ?? "Default Counter"

    
    
    function increment (incrementor){
      setCount(count + incrementor)
    }
  


    return (
      <div className="App">
        <h1> { name }</h1>
        Count: { count }
        <button onClick={ () => increment(1) }> Increment </button>
        <button onClick={ () => increment(2) }> Increment by 2 </button>
        {
          (count > 0) ? 
          // output if condition is met (if)
          <button onClick={ () => increment(-1) }> decrement by 1 </button>:
          // output if condition is not met (else)
          <></>
        }
        {
          (count > 1) ?
          <button onClick={ () => increment(-2) }> decrement by 2 </button>:
          <></>
        }
        
      </div>
    );
}