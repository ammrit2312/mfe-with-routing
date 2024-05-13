import React from "react";

import { useSelector } from "react-redux";
import { getChangeName } from "childApp/changeNameSelector";

const Another = () => {
  const name = useSelector((state) => getChangeName(state));
  return <div>Another Component {name}</div>;
};

export default Another;
