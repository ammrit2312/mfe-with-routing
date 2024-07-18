import { useRoutes } from "react-router-dom";
import Child from "./Child";
import AnotherChild from "./AnotherChild";
import ContainerComponent from "./ContainerComponent";

export const childRoutes = [
  {
    path: "/",
    element: <ContainerComponent />,
    children: [
      {
        element: <Child />,
        index: true,
      },
      {
        path: "/anotherChild",
        element: <AnotherChild />,
      },
    ]
  },
  // { path: "/", element: <Child /> },
  // { path: "/anotherChild", element: <AnotherChild /> },
];

export const ChildRouter = () => {
  // return <ReduxProvider store={store}>{useRoutes(childRoutes)}</ReduxProvider>
  return useRoutes(childRoutes)
};
