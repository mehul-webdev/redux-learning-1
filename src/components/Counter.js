import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { decrement, increase, increment, toggle } from "../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const { counter, showCounter } = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch({
      type: "DECREMENT",
    });

    dispatch(decrement());
  };

  const incrementByFive = () => {
    dispatch(increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <div className={classes.counterActions}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFive}>Increment By 5</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
