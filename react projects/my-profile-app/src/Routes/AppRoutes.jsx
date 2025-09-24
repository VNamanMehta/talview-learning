import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import Bio from "../components/Bio";
import Contact from "../components/Contact";
import Users from "../Users";
import UserProfilePage from "../components/UserProfilePage";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes () {
    return (
        <Routes>
            <Route path="/bio" element={<Bio biotext={"Hello everynyan"} />} />
            <Route path="/header" element={<Header />} />
            <Route path="/contact" element={<Contact email={"vnm.official.01@gmail.com"} phone={"99890945993"} />} />
            <Route path="/users" element={<Users />} />
            <Route path='users/:userId' element={<UserProfilePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
        </Routes>
    )
}

export default AppRoutes