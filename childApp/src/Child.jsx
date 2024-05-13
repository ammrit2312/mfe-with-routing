import { useState } from "react";

import { getCounter } from "parentApp/counterSelector";
import { useSelector, useDispatch } from "react-redux";
import { getChangeName } from "childApp/changeNameSelector";
import { nameChange } from "childApp/changeNameReducer";

const Child = () => {
  const count = useSelector((state) => getCounter(state));
  const name = useSelector((state) => getChangeName(state));

  const [newName, setNewName] = useState(name);

  const dispatch = useDispatch();

  return (
    <div>
      Child Component {count}
      <br />
      {name}
      <br />
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={() => dispatch(nameChange(newName))}>Change Name</button>
    </div>
  );
};

export default Child;
