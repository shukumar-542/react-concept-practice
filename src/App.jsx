import { useMemo, useReducer, useState } from "react";
import ProductTable from "./components/ProductTable";
import { reducer, todoInitialState, todoReducer } from "./components/UseReduce";

const initialState = { count: 0 };

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5)

  const [text, setText] = useState("")

  const [state, dispatch] = useReducer(reducer, initialState)

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

  const expenseCalculation = (num) => {
    console.log("calculation..");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += num
    }
    return result
  }


  const calculateValue = useMemo(() => {
    return expenseCalculation(number)
  }, [number])



  const factorial = (number) => {
    let result = 1;
    if (number <= 0) {
      result = 1
    } else {
      while (number > 1) {
        result = result * number
        number--
      }
    }
    return result
  }

  // console.log(state.count)

  const [todoState, todoDispatch] = useReducer(todoReducer, todoInitialState)

  const handleAdd = () => {

    todoDispatch({ type: 'add_todo', payload: text })
    setText("")
  }


  // console.log(todoState)

  const handleDelete = (id)=>{
    todoDispatch({type : 'delete_todo', payload : id})
    console.log(id)
  }


  return (
    <div style={{ display: 'flex' }}>
      <div >
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

        <button onClick={() => setCount(count + 1)}>Increase Count : {count}</button>
        <button onClick={() => setNumber(number + 1)}>Increase Number :  {number}</button>
        <ProductTable />

        <p>Count : {state.count}</p>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>

      <div style={{ width: "100%" }}>
        <h1 >Todo App using useReducer</h1>

        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border px-2 py-1 w-full"
            placeholder="Enter todo"
          />
          <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-1 rounded">
            Add
          </button>
        </div>

        {

          todoState?.map(todo=> <div><p key={todo?.id}>{todo.text}</p><button onClick={()=> handleDelete(todo?.id)}>Delete</button></div>)
          // todoState.length ? <>
          
          // </> : <p>Not todo listed</p>
        }

      </div>
    </div>
  );
}

export default App;
