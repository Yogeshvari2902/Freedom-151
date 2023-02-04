import { Route, Routes } from "react-router-dom";
import Data from "./Data";
import Home from "./Home";
import Login from "./Login";
import Report from "./Report";
import SignUp from "../Components/SignUp";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />  } />
        <Route path="/data" element={<Data /> } />
        <Route path="/report" element={<Report /> } />
        <Route path="*" element={<h1 style={{color:"red"}}>404 Error</h1>} />
      </Routes>
    </div>
  );
}
export default AllRoutes;
