import { BrowserRouter as Router, Route,  Routes  } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AuthContext from './contextApi/authContext';
import { useContext } from "react";

function App() {
  const {auth} = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route  path="/home" element={auth.isAuthenticate ? (<HomePage/>) : (<LoginPage/>)} />
        <Route exact path="/signup" element={<SignupPage/>} />
        <Route exact path="/login" element={<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
