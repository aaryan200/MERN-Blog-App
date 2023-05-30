import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    
    // <>
    //   <TopBar/>
    //   <Write/>
    // </>
    <Router>
      <TopBar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/register' element={user ? <Home/> : <Register/>} />
        {/* if there is a user, go to home page otherwise register page if /register is requested */}
        <Route path='/login' element={user ? <Home/> : <Login/>} />
        <Route path='/write' element={user ? <Write/> : <Login/>} />
        <Route path='/settings' element={user ? <Settings/> : <Login/>} />
        <Route path='/post/:postId' element={<Single/>} />
      </Routes>
    </Router>
  );
}

export default App;