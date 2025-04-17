import { Footer } from "../UI/Footer";
import { Headers } from "../UI/Headers";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
    return (
            <>
            <Headers/>
            <Outlet/>
            <Footer/>
            </>
    )
}
