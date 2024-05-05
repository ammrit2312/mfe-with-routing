import { useRoutes } from "react-router-dom";
import Home from "./Home";
import Another from "./Another";
import { childRoutes } from "childApp/ChildRouter";
// import Child from "childApp/Child";
// import AnotherChild from "childApp/AnotherChild";

const MainRouter = () => {
  const finalRoute = childRoutes.map((route) => {
    let newPath = route.path.split("/");
    newPath[0] = "/child";
    newPath = newPath.join("/");
    route.path = newPath;
    return route;
  });

  // console.log("Checking ##", finalRoute);
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/another", element: <Another /> },
    // { path: "/child", element: <Child /> },
    // { path: "/child/anotherChild", element: <AnotherChild /> },
    ...finalRoute,
  ]);
};

export default MainRouter;
