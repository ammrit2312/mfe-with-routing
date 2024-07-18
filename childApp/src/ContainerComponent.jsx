import { Outlet } from "react-router-dom";

const ContainerComponent = () => {
  return (
    <main>
        <div>Parent Outlet</div>
        <Outlet />
        <div>Footer Outlet</div>
    </main>
  )
}

export default ContainerComponent
