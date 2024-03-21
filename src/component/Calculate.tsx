import { useReducer } from "react";

const Calculate = () => {

    const reducer = (state:any, action:any) => {
        // 判斷 action type，執行相對應的動作
        switch (action.type) {
          case "plus":
            return { count: state.count + 1 };
          case "minus":
            return { count: state.count - 1 };
          default:
            return state;
        }
      };

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    const increment = () => {
        // 接收的參數會是 reducer 的 action
        dispatch({ type: "plus" });
      };
  
      const decrement = () => {
        // 傳入 `減` 的 action
        dispatch({ type: "minus" });
      };


    return (
      <div className="App d-flex">
        <button onClick={decrement}>-</button>
        <div className="m-4">
            {state.count}
        </div>
        <button onClick={increment}>+</button>
      </div>
    );
  }

  export default Calculate;