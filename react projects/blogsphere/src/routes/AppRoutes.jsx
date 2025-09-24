import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PostPage from "../pages/PostPage";
import CreatePostPage from "../pages/CreatePostPage";
import SignUpPage from "../pages/SignUpPage";
import AuthLayout from "../components/AuthLayout";
import ProtectedRoutes from "../components/ProtectedRoutes";
import DashboardLayout from "../components/DashboardLayout";
import UserPostPage from "../pages/UserPostPage";
import UserProfilePage from "../pages/UserProfilePage";
import RootLayout from "../components/RootLayout";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<RootLayout />}>
            <Route element={<AuthLayout />} >
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
            </Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<ProtectedRoutes><DashboardLayout /></ProtectedRoutes>}>
                <Route index element={<UserPostPage />} />
                <Route path="my-post" element={<UserPostPage />} />
                <Route path="/dashboard/my-post/:postId" element={<PostPage />} />
                <Route path="my-profile" element={<UserProfilePage/>} />
                <Route path="create" element={<CreatePostPage />} />
            </Route>
            
            <Route path="/posts/:postId" element={<PostPage />}/>
            
            </Route>
        </Routes>
    )
}

export default AppRoutes