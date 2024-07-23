import { Navigate, useRoutes } from "react-router-dom";
import Child from "./Child";
import AnotherChild from "./AnotherChild";
import ContainerComponent from "./ContainerComponent";

export const childRoutes = [
  {
    element: <ContainerComponent />,
    children: [
      {
        element: <Child />,
        path: "/child",
      },
      {
        path: "/anotherChild",
        element: <AnotherChild />,
      },
    ],
  },
  // {
  //   path: "/mera-child",
  //   element: <Child />,
  // },
  // {
  //   path: "/anotherChild",
  //   element: <AnotherChild />,
  // },
  {
    path: '/',
    element: <Navigate to="/child/child" replace />,
  }
  // { path: "/", element: <Child /> },
  // { path: "/anotherChild", element: <AnotherChild /> },
];

export const ChildRouter = () => {
  // return <ReduxProvider store={store}>{useRoutes(childRoutes)}</ReduxProvider>
  return useRoutes(childRoutes)
};
