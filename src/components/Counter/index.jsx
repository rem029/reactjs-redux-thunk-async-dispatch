import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterDoubleDecrement,
  counterIncrement,
  counterDoubleIncrement
} from "../../redux/actions/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = (e) => {
    e.preventDefault();
    console.log("incremented");
    dispatch(counterIncrement());
  };

  const handleDoubleIncrement = (e) => {
    e.preventDefault();
    console.log("incremented");
    dispatch(counterDoubleIncrement());
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    console.log("decremented");
    dispatch(counterDecrement());
  };

  const handleDoubleDecrement = (e) => {
    e.preventDefault();
    console.log("decremented");
    dispatch(counterDoubleDecrement());
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>{counter}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDoubleIncrement}>++</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleDoubleDecrement}>--</button>
    </div>
  );
};

export default Counter;
