import React, {useState} from 'react'

function Counter(){
    const [count, setCount] = useState(0);
    function incrementCount(){
        setCount(prevCount => prevCount+1);
    }
    function decrementCount(){
        
        setCount(prevCount => {
            if(prevCount===0) {
                alert("Can't display negative number")
                return 0;
            }
            else return prevCount-1;
        }
        );
    }
    function reset(){
        setCount(0);
    }

    return (
        <div>
           <h1>Counter - {count}</h1> 
           <button onClick={incrementCount}>Increment</button>
           <button onClick={decrementCount}>Decrement</button>
           <button onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;