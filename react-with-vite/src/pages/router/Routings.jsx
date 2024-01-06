import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../layouts/HomePage";

const Routings = () => {
    return (<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    </BrowserRouter>
    </>)
}
export default Routings;