import { useRoutes } from "react-router-dom";
import Child from "./Child";
import AnotherChild from "./AnotherChild";

export const childRoutes = [
  { path: "/", element: <Child /> },
  { path: "/anotherChild", element: <AnotherChild /> },
];

export const ChildRouter = () => {
  return useRoutes(childRoutes);
};
