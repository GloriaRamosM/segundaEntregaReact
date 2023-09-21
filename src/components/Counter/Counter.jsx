import React, {useState} from 'react'

const Counter = () => {
const [count, setCount] = useState(0)

const increment = () => {
    setCount(count +1)
}
const decrement = () => {
count > 0 && setCount (count -1)
}



  return (
    <div>
      <button onClick={increment}> Sumar </button>
      <span> Valor : {count}</span>
      <button onClick={decrement}> Restar </button>
    </div>
  )
}

export default Counter
