import { useMemo, useReducer, useState } from "react";
import ProductTable from "./components/ProductTable";
import { reducer } from "./components/UseReduce";

const initialState = { count : 0 };

function App() {
  const [search, setSearch] = useState("");
  const [count , setCount ] = useState(0);
  const [number , setNumber] = useState(5)

  const [state , dispatch] = useReducer(reducer , initialState)

  const users = [
    "Shukumar Ghosh",
    "Arif Hossain",
    "Tamim Iqbal",
    "Nasrin Jahan",
    "Ayesha Akter",
    "Rasel Miah",
  ];

  const filterUsers = useMemo(() => {
    return users?.filter((user) => user.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  const expenseCalculation = (num)=>{
    console.log("calculation..");
    let result = 0;
    for(let i = 0 ; i < 1000000000 ; i ++){
      result += num
    }
    return result
  }

  
  const calculateValue = useMemo(()=>{
    return expenseCalculation(number)
  }, [number])



  const factorial = (number)=>{
    let result = 1; 
    if(number <= 0){ 
       result =  1
    }else{
      while(number > 1){
        result =  result * number
        number--
      }
    }
    return result
  }

// console.log(state.count)


  return (
    <div className="">
      <h1>Users</h1>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "5px", marginBottom: "10px" }}
      />

      {filterUsers?.map((user) => {
        return <p key={user}>{user}</p>;
      })}
      <h2>Expensive Calculation Result: {calculateValue}</h2>

      <button onClick={()=> setCount(count+1)}>Increase Count : {count}</button>
      <button onClick={()=> setNumber(number+1)}>Increase Number :  {number}</button>
      <ProductTable/>

      <p>Count : {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default App;
