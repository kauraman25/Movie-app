import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Login from "./login/Login";
// import Home from "./components/Home";
// import WatchList from "./components/WatchList";
// import Details from "./components/Details";
import { createContext, useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";
export const AuthUser = createContext();

const Home = lazy(() => import("./components/Home"))
const Login = lazy(() => import("./Login/Login"))
const WatchList = lazy(() => import("./components/WatchList"))
const Details = lazy(() => import("./components/Details"))
const AppRouter = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   if (isLoggedIn) {
  //     setLoggedIn(true);
  //   }
  // }, []);
  const login = (username, password) => {
    if (password === password) {
      setLoggedIn(true);
      setUsername(username);
      // localStorage.setItem("isLoggedIn", true);
      // localStorage.setItem("username", username);
    } else {
      alert("Please enter correct password");
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setUsername("");
    // localStorage.removeItem("isLoggedIn");
    // localStorage.removeItem("username");
  };

  return (
    <AuthUser.Provider value={{ username, loggedIn, login, logout }}>
      <BrowserRouter>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/home"
            element={loggedIn ? <Home /> : <Navigate to="/" />}
          />

          <Route path="/details/:id" element={<Details />} />
          <Route path="/watchlist" element={<WatchList />} />
        
        </Routes>
        </Suspense>
          
      </BrowserRouter>
    </AuthUser.Provider>
  );
};

export default AppRouter;
