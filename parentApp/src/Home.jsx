import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/ducks/counter";
import { getCounter } from "./store/selectors/counter.selector";

// import Child from "childApp/Child";

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => getCounter(state));

  return (
    <div>
      Home Component {count}
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(increment());
        }}
      >
        Click Me!!
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(decrement());
        }}
      >
        Reduce Me!!
      </button>
      {/* <Child/> */}
    </div>
  );
};

export default Home;
